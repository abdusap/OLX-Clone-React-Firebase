import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyDVPogqStVGSsmqECEJG1t2kf6FbCjfo0s",
authDomain: "olx-clone-92431.firebaseapp.com",
projectId: "olx-clone-92431",
storageBucket: "olx-clone-92431.appspot.com",
messagingSenderId: "253596269375",
appId: "1:253596269375:web:c64811105b1ee36898f18a",
measurementId: "G-7GMEXB7MCG"
};
// Initialize Firebase
const Firebase = initializeApp(firebaseConfig);
export default Firebase
