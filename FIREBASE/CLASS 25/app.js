   // Import the functions you need from the SDKs you need
   import {
       initializeApp
   } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";

   import {
       getAuth,
       signInWithPopup,
       FacebookAuthProvider
   } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";


   // TODO: Add SDKs for Firebase products that you want to use
   // https://firebase.google.com/docs/web/setup#available-libraries

   // Your web app's Firebase configuration
   const firebaseConfig = {
       apiKey: "AIzaSyDHdQ57PPyT_eWv9jECRqOGEvhVAa9o5rc",
       authDomain: "databse-863ef.firebaseapp.com",
       databaseURL: "https://databse-863ef-default-rtdb.firebaseio.com",
       projectId: "databse-863ef",
       storageBucket: "databse-863ef.appspot.com",
       messagingSenderId: "583714962970",
       appId: "1:583714962970:web:94e607617653222a909ba3"
   };

   // Initialize Firebase
   const app = initializeApp(firebaseConfig);
   const auth = getAuth(app);
   const provider = new FacebookAuthProvider(app);

   
var user;
   document.getElementById("login").addEventListener('click', function () {

       signInWithPopup(auth, provider)
           .then((result) => {
               // The signed-in user info.
                user = result.user;
              data();
               // This gives you a Facebook Access Token. You can use it to access the Facebook API.
               const credential = FacebookAuthProvider.credentialFromResult(result);
               const accessToken = credential.accessToken;

               // ...
           })
           .catch((error) => {
               // Handle Errors here.
               const errorCode = error.code;
               const errorMessage = error.message;
               // The email of the user's account used.
               const email = error.email;
               // The AuthCredential type that was used.
               const credential = FacebookAuthProvider.credentialFromError(error);
               console.log(errorMessage);

               // ...
           });

   });

   function data() {
    console.log(user.email)
   }
