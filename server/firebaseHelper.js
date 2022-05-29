import admin from 'firebase-admin';
import { createRequire } from "module";

const require = createRequire(import.meta.url); //fix cant using require in ES6

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

export default admin;