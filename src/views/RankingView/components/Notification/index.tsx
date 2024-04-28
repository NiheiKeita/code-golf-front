"use client"

import React, { useState, useEffect } from "react";
import { onMessageListener, requestForToken } from "../../hooks/firebase";

const Notification = () => {
  const [notification, setNotification] = useState({ title: "", body: "" });
  useEffect(() => {
    if (notification?.title) {
      alert("title: " + notification?.title + "\nbody: " + notification?.body);
    }
  }, [notification]);

  useEffect(() => {
    requestForToken()

    onMessageListener()
    .then((payload:any) => {
        setNotification({ title: payload?.notification?.title, body: payload?.notification?.body });
      })
      .catch((err:any) => console.log("failed: ", err));

  }, []);
  return <div />;
};

export default Notification;

