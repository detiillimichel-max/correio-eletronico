import React, { useState } from "react";

export function GeminiInput({ onSend }: { onSend: (msg: string) => void }) {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) return;
    onSend(text);
    setText("");
  };

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      padding: "12px",
      background: "linear-gradient(90deg, #4A00E0, #8E2DE2)",
      borderRadius: "16px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.3)"
    }}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Digite sua mensagem..."
        style={{
          flex: 1,
          border: "none",
          outline: "none",
          background: "transparent",
          color: "white",
          fontSize: "16px",
          padding: "8px"
        }}
      />
      <button
        onClick={handleSend}
        style={{
          background: "rgba(255,255,255,0.2)",
          border: "none",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          color: "white",
          cursor: "pointer"
        }}
      >
        ➤
      </button>
    </div>
  );
}
