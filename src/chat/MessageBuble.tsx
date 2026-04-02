// src/chat/MessageBuble.tsx
import React from "react";
import { Message } from "./useChat";

interface Props {
  message: Message;
  currentUserId: string;
}

export default function MessageBuble({ message, currentUserId }: Props) {
  const isMine = message.sender_id === currentUserId;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: isMine ? "flex-end" : "flex-start",
        margin: "8px 0",
      }}
    >
      <div
        style={{
          background: isMine ? "#4a90e2" : "#eee",
          color: isMine ? "#fff" : "#000",
          padding: "10px",
          borderRadius: "12px",
          maxWidth: "70%",
        }}
      >
        {message.content}
      </div>
    </div>
  );
}