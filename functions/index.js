const admin = require('firebase-admin');
const functions = require('firebase-functions');
const db = admin.initializeApp().firestore();

// Recalculates the total cost of a cart triggered by any change to items in a cart.
exports.calculateCart = functions
    .firestore.document("carts/{cartId}/items/{itemId}")
    .onWrite(async (change, context) => {
      console.log(`onWrite: ${change.after.ref.path}`);

      // Ignore deletes
      if (!change.after.exists) {
        return;
      }

      let totalPrice = 0;
      let itemCount = 0;

      try {
        const cartRef = db.collection("carts").doc(context.params.cartId);
        const itemsSnap = await cartRef.collection("items").get();

        itemsSnap.docs.forEach(item => {
          const itemData = item.data();
          if (itemData.price) {
            // If not specified, the quantity is 1
            const quantity = itemData.quantity || 1;
            itemCount += quantity;
            totalPrice += itemData.price * quantity;
          }
        });

        // Update the cart's total price and item count
        await cartRef.update({
          totalPrice,
          itemCount
        });

        console.log("Cart total successfully recalculated:", totalPrice);

      } catch (err) {
        console.error("Error updating cart total:", err);
      }
    });
