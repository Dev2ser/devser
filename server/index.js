import * as admin from "firebase-admin";

import serviceAccount from "./config/eduprojects-43f9c-firebase-adminsdk-i0u5c-85337a87a3";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://eduprojects-43f9c.firebaseio.com"
});
