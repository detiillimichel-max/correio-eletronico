import React, { useState } from "react";
import { useChat } from "./useChat";
import { MessageBubble } from "./MessageBubble";
import { AudioRecorder } from "./AudioRecorder";
import { ImageUploader } from "./ImageUploader";

export function ChatDrawer() {
  const { messages, sendMessage } = useChat("room1");
  const [text, setText] = useState("");

  return (
    <div style={{ padding: "16px" }}>
      <h2>Chat</h2>
      <div style={{ maxHeight: "60vh", overflowY: "auto" }}>
        {messages.map((m) => (
          <MessageBubble key={m.id} message={m} />
        ))}
      </div>
      <div style={{ display: "flex", gap: "8px", marginTop: "12px" }}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Digite uma mensagem..."
          style={{ flex: 1 }}
        />
        <button onClick={() => { sendMessage("user1", "user2", text); setText(""); }}>
          Enviar
        </button>
        <AudioRecorder onSend={(fileUrl) => sendMessage("user1", "user2", fileUrl, "audio")} />
        <ImageUploader onSend={(fileUrl) => sendMessage("user1", "user2", fileUrl, "image")} />
      </div>
    </div>
  );
}
