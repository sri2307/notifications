import "./App.css";
import Fader from "./components/Fader";

import React, { useState } from "react";
import { onMessageListener } from "./firebaseInit";
import Notifications from "./components/Notifications/Notifications";
import ReactNotificationComponent from "./components/Notifications/ReactNotification";
import PushNotifications from "./components/PushNotifications/PushNotifications";
import TopicImportance from "./components/TopicImportance/TopicImportance";

function App() {
  const [show, setShow] = useState(false);
  const [notification, setNotification] = useState({ title: "", body: "" });

  // console.log(show, notification);

  onMessageListener()
    .then((payload) => {
      setShow(true);
      setNotification({
        title: payload.notification.title,
        body: payload.notification.body,
      });
      console.log(payload);
    })
    .catch((err) => console.log("failed: ", err));

  return (
    <div className='App'>
      {/* {show ? (
        <ReactNotificationComponent
          title={notification.title}
          body={notification.body}
        />
      ) : (
        <></>
      )}
      <Notifications /> */}
      {/* <Fader text='Hello React'></Fader> */}
      <TopicImportance />
    </div>
    // <PushNotifications />
  );
}

export default App;
