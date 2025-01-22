# Betr Beta Task 2

Local Development with the Firebase Emulator Suite.

### Demo link:
https://www.loom.com/share/cb0b60e6d6ce48848d070d7738085797?sid=fd690cdf-8f4a-42f9-adae-401eea9d0d10

## Getting Started

### Clone the Repository
```sh
https://github.com/aniketch07/Betr-Beta-task2.git
cd Betr-Beta-task2
```
Now, install the dependencies so you can run the code. If you're on a slower internet connection this may take a minute or two:
```
bash
# Move into the functions directory
$ cd functions

# Install dependencies
$ npm install

# Move back into the previous directory
$ cd ../
```
Get the Firebase CLI
The Emulator Suite is part of the Firebase CLI (command-line interface) which can be installed on your machine with the following command:
```
bash
$ npm install -g firebase-tools
```
Next, confirm that you have the latest version of the CLI. This codelab should work with version 9.0.0 or higher but later versions include more bug fixes.
```
bash
$ firebase --version
9.6.0
```
Connect to your Firebase Project
If you don't have a Firebase project, in the Firebase console, create a new Firebase project. Make a note of the Project ID you choose, you will need it later.

Now we need to connect this code to your Firebase project. First run the following command to log in to the Firebase CLI:
bash
```
$ firebase login
```
Next run the following command to create a project alias. Replace $YOUR_PROJECT_ID with the ID of your Firebase project.
```
bash
$ firebase use $YOUR_PROJECT_ID
```

### Start the Emulators
```
$ firebase emulators:start --import=./seed
```

You should see some output like this:

```
$ firebase emulators:start --import=./seed
i  emulators: Starting emulators: auth, functions, firestore, hosting
⚠  functions: The following emulators are not running, calls to these services from the Functions emulator will affect production: database, pubsub
i  firestore: Importing data from /Users/samstern/Projects/emulators-codelab/codelab-initial-state/seed/firestore_export/firestore_export.overall_export_metadata
i  firestore: Firestore Emulator logging to firestore-debug.log
i  hosting: Serving hosting files from: public
✔  hosting: Local server: http://127.0.0.1:5000
i  ui: Emulator UI logging to ui-debug.log
i  functions: Watching "/Users/samstern/Projects/emulators-codelab/codelab-initial-state/functions" for Cloud Functions...
✔  functions[calculateCart]: firestore function initialized.

┌─────────────────────────────────────────────────────────────┐
│ ✔  All emulators ready! It is now safe to connect your app. │
│ i  View Emulator UI at http://127.0.0.1:4000                │
└─────────────────────────────────────────────────────────────┘

┌────────────────┬────────────────┬─────────────────────────────────┐
│ Emulator       │ Host:Port      │ View in Emulator UI             │
├────────────────┼────────────────┼─────────────────────────────────┤
│ Authentication │ 127.0.0.1:9099 │ http://127.0.0.1:4000/auth      │
├────────────────┼────────────────┼─────────────────────────────────┤
│ Functions      │ 127.0.0.1:5001 │ http://127.0.0.1:4000/functions │
├────────────────┼────────────────┼─────────────────────────────────┤
│ Firestore      │ 127.0.0.1:8080 │ http://127.0.0.1:4000/firestore │
├────────────────┼────────────────┼─────────────────────────────────┤
│ Hosting        │ 127.0.0.1:5000 │ n/a                             │
└────────────────┴────────────────┴─────────────────────────────────┘
  Emulator Hub running at 127.0.0.1:4400
  Other reserved ports: 4500
```

# output
Fire Store : http://127.0.0.1:5000
Firebase Emulator: http://127.0.0.1:4000
