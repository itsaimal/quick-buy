import firebase from "firebase/app";
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyBsmudK5_5F8cuyXGza9YqAlIz7gUXdWjM",
    authDomain: "quick-buy-18.firebaseapp.com",
    projectId: "quick-buy-18",
    storageBucket: "quick-buy-18.appspot.com",
    messagingSenderId: "627392121096",
    appId: "1:627392121096:web:1d9764c88d65c1cb7c84bd",
    measurementId: "G-W6SCSZFQTK"
  };

  firebase.initializeApp(config);


  // export const addCollectionAndDocuments = async (collectionKey,objectsToAdd) => {

  //   const collectionRef = firestore.collection(collectionKey);
  //   console.log(collectionRef);

  //   const batch = firestore.batch()
  //   objectsToAdd.forEach(obj => {
  //     const newDocRef = collectionRef.doc();
     
  //     batch.set(newDocRef,obj);
      
  //   })

  //   return await batch.commit()

  // }

  export const firestore = firebase.firestore();


  export default firebase;
