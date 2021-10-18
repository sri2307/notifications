import firebase from "firebase/app";
import "firebase/messaging";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYTsUpc3ctPeZe42hRvKFnyXQ4HLmMn_4",
  authDomain: "push-notification-8cbee.firebaseapp.com",
  projectId: "push-notification-8cbee",
  storageBucket: "push-notification-8cbee.appspot.com",
  messagingSenderId: "143318308491",
  appId: "1:143318308491:web:dbd325cfe757156057a68e",
  measurementId: "G-ECJ9THE0J5"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

const { REACT_APP_VAPID_KEY } = process.env;
const publicKey = REACT_APP_VAPID_KEY;

export const getToken = async (setTokenFound) => {
  let currentToken = "";

  try {
    currentToken = await messaging.getToken({ vapidKey: publicKey });
    if (currentToken) {
      setTokenFound(true);
    } else {
      setTokenFound(false);
    }
  } catch (error) {
    console.log("An error occurred while retrieving token. ", error);
  }

  return currentToken;
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
  });
