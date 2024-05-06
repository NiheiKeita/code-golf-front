import { initializeApp } from "firebase/app"

import { getMessaging, getToken, onMessage } from "firebase/messaging";
const apiKey: string | undefined = process.env.NEXT_PUBLIC_APP_API_KEY ?? ''
const authDomain: string | undefined =process.env.NEXT_PUBLIC_AUTH_DOMAIN ?? ''
const projectId: string | undefined =process.env.NEXT_PUBLIC_PROJECT_ID ?? ''
const storageBucket: string | undefined =process.env.NEXT_PUBLIC_STORAGE_BUCKET ?? ''
const messagingSenderId: string | undefined =process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID ?? ''
const appId: string | undefined =process.env.NEXT_PUBLIC_APP_ID ?? ''
const measurementId: string | undefined =process.env.NEXT_PUBLIC_MEASUREMENT_ID ?? ''
const vapidKey: string | undefined =process.env.VITE_APP_VAPID_KEY ?? ''

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
  measurementId: measurementId,
}

const app = initializeApp(firebaseConfig);

export const messaging = getMessaging(app);

export const requestForToken = () => {
  return getToken(messaging, { vapidKey: vapidKey })
    .then((currentToken) => {
      if (currentToken) {
        console.log("current token for client: ", currentToken);
      } else {
        console.log("No registration token available. Request permission to generate one.");
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
    })
}

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log("payload", payload)
      resolve(payload)
    })
  })

