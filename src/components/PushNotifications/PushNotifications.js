import React, { useState } from "react";
import { Notifications } from "react-push-notification";
import addNotification from "react-push-notification";

const PushNotifications = () => {
  const [toggle, setToggle] = useState(false);

  const buttonClick = () => {
    addNotification({
      title: "Holiday",
      subtitle: "Holiday Notification",
      message: "Today is Holiday due to Diwali",
      theme: "darkblue",
      native: true, // when using native, your OS will handle theming.
      duration: 5000,
      onClick: () => setToggle((state) => !state),
    });

    // addNotification({
    //   title: "Holiday",
    //   subtitle: "Holiday Notification",
    //   message: "Today is Holiday due to Diwali",
    //   theme: "darkblue",
    //   native: false, // when using native, your OS will handle theming.
    //   duration: 10000,
    //   onClick: () => setToggle((state) => !state),
    // });
  };

  return (
    <>
      <div>
        <Notifications />
      </div>
      <button onClick={buttonClick} className='button'>
        Click Me
      </button>
      {toggle && <h1>Hello</h1>}
    </>
  );
};

export default PushNotifications;
