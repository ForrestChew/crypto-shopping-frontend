import { useState, useEffect } from "react";
import "./Notification.css";

const Notification = ({ isSuccess }) => {
  const [messageType, setMessageType] = useState("");
  useEffect(() => {
    if (isSuccess) {
      setMessageType("Success");
    } else {
      setMessageType("Error: Try again later");
    }
  });

  return (
    <div
      className={
        isSuccess
          ? "notification notification-success"
          : "notification notification-error"
      }
    >
      <p>{messageType}</p>
    </div>
  );
};

export default Notification;
