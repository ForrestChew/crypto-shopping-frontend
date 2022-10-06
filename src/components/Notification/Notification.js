import { useState, useEffect } from "react";
import "./Notification.css";

const Notification = ({ isError }) => {
  const [messageType, setMessageType] = useState("");
  useEffect(() => {
    if (isError) {
      setMessageType("Error: Try again later");
    } else {
      setMessageType("Success");
    }
  });

  return (
    <div
      className={
        isError
          ? "notification notification-error"
          : "notification notification-success"
      }
    >
      <p>{messageType}</p>
    </div>
  );
};

export default Notification;
