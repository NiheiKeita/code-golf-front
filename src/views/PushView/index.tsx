"use client"
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";
import React, { useEffect } from "react"
const apiKey: string | undefined = process.env.NEXT_PUBLIC_APP_API_KEY ?? ''
const authDomain: string | undefined = process.env.NEXT_PUBLIC_AUTH_DOMAIN ?? ''
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
      projectId: projectId,
      storageBucket: storageBucket,
      messagingSenderId: messagingSenderId,
      appId: appId,
      measurementId: measurementId,
    }

    const app = initializeApp(firebaseConfig)
    const messaging = getMessaging(app)
    const analytics = getAnalytics(app)
    console.log(projectId)
    getToken(messaging, { vapidKey: vapidKey });
  }, [])
  return (
    <>
      <div className="text-black">
        画面
      </div>
    </>
  )
})
