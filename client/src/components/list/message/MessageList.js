import React from "react";
import "./MessageList.css";

const MessageList = ({ items, type, margin }) => {
  return (
    <ul style={{ marginBottom: margin }} className="message-list">
      {items.map((item, index) => {
        return (
          <li
            key={index}
            className={`message-list__item ${
              type === "error"
                ? "message-list__item--error"
                : "message-list__item--success"
            }`}
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
};

export default MessageList;
