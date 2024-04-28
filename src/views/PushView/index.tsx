"use client"
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { onBackgroundMessage } from "firebase/messaging/sw";
import React, { useEffect } from "react"
const apiKey: string | undefined = process.env.NEXT_PUBLIC_APP_API_KEY ?? ''
const authDomain: string | undefined = process.env.NEXT_PUBLIC_AUTH_DOMAIN ?? ''
const databaseURL: string | undefined = process.env.NEXT_PUBLIC_DATABASE_URL ?? ''
const projectId: string | undefined = process.env.NEXT_PUBLIC_PROJECT_ID ?? ''
const storageBucket: string | undefined = process.env.NEXT_PUBLIC_STORAGE_BUCKET ?? ''
const messagingSenderId: string | undefined = process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID ?? ''
const appId: string | undefined = process.env.NEXT_PUBLIC_APP_ID ?? ''
const measurementId: string | undefined = process.env.NEXT_PUBLIC_MEASUREMENT_ID ?? ''
const vapidKey: string | undefined = process.env.NEXT_PUBLIC_VAPID_KEY ?? ''

export const PushView = React.memo(function PushView() {
  useEffect(() => {
    const firebaseConfig = {
      apiKey: apiKey,
      authDomain: authDomain,
      databaseURL: databaseURL,
      projectId: projectId,
      storageBucket: storageBucket,
      messagingSenderId: messagingSenderId,
      appId: appId,
      measurementId: measurementId,
    }

    const app = initializeApp(firebaseConfig)
    const messaging = getMessaging(app)
    const analytics = getAnalytics(app)
    console.log(appId)
    // getToken(messaging, { vapidKey: vapidKey });
    getToken(messaging, { vapidKey: vapidKey }).then((currentToken) => {
      if (currentToken) {
        // Send the token to your server and update the UI if necessary
        console.log('ddd');
        console.log(currentToken);
        // ...
      } else {
        // Show permission request UI
        console.log('No registration token available. Request permission to generate one.');
        // ...
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
      // ...
    });
    onMessage(messaging, (payload) => {
      console.log('Message received. ', payload);
    });
    // function requestPermission() {
    //   console.log('Requesting permission...');
    //   Notification.requestPermission().then((permission) => {
    //     if (permission === 'granted') {
    //       console.log('Notification permission granted.');
    //     }
    //   })
    // }
    // requestPermission()

  }, [])
  return (
    <>
      <div className="text-black">
        画面
      </div>
    </>
  )
})
