import React, { useState, useEffect } from "react";
import { onMessageListener, requestPermission } from "../../hooks/firebase";

const Notification = () => {
  const [notification, setNotification] = useState({ title: "", body: "" });
  useEffect(() => {
    if (notification?.title) {
      alert("title: " + notification?.title + "\nbody: " + notification?.body);
    }
  }, [notification]);

  requestPermission()

  onMessageListener()
  .then((payload:any) => {
      setNotification({ title: payload?.notification?.title, body: payload?.notification?.body });
    })
    .catch((err:any) => console.log("failed: ", err));

  return <div />;
};

export default Notification;