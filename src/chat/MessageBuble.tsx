import React from "react";
import { Message } from "./useChat";

export function MessageBubble({ message }: { message: Message }) {
  return (
    <div style={{
      background: "rgba(255,255,255,0.1)",
      borderRadius: "12px",
      padding: "8px",
      margin: "4px 0"
    }}>
      {message.type === "text" && <p>{message.content}</p>}
      {message.type === "image" && <img src={message.content} alt="img" style={{ maxWidth: "200px" }} />}
      {message.type === "audio" && <audio controls src={message.content}></audio>}
    </div>
  );
}
