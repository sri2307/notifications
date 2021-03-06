import React from "react";
import PropTypes from "prop-types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import classes from "./ReactNotifications.module.css";

const ReactNotificationComponent = ({ title, body }) => {
  let hideNotif = title === "";

  if (!hideNotif) {
    toast.info(<Display />);
  }

  function Display() {
    return (
      <div className={classes.notification}>
        <h4 className={classes.title}>{title}</h4>
        <p className={classes.body}>{body}</p>
      </div>
    );
  }

  return (
    <ToastContainer
      autoClose={30000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable
      pauseOnHover={false}
    />
  );
};

ReactNotificationComponent.defaultProps = {
  title: "This is title",
  body: "Some body",
};

ReactNotificationComponent.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
};

export default ReactNotificationComponent;
