import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBz1sBsVtm_XHkVsvkrf_BC04p3E8-88ec",
    authDomain: "cadastro-academia.firebaseapp.com",
    projectId: "cadastro-academia",
    storageBucket: "cadastro-academia.appspot.com",
    messagingSenderId: "448896960202",
    appId: "1:448896960202:web:742e0cf832cb9d30f1d633",
    measurementId: "G-1QLMF2T1PK"
  };
  
  
  
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export default firebase;