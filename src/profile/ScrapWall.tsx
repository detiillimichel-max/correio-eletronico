import React, { useState } from "react";

interface Scrap {
  id: string;
  author: string;
  content: string;
}

export function ScrapWall() {
  const [scraps, setScraps] = useState<Scrap[]>([]);
  const [text, setText] = useState("");

  const addScrap = () => {
    const newScrap: Scrap = {
      id: Date.now().toString(),
      author: "user1",
      content: text,
    };
    setScraps([...scraps, newScrap]);
    setText("");
  };

  return (
    <div style={{ padding: "16px" }}>
      <h3>Mural de Recados</h3>
      <div>
        {scraps.map((s) => (
          <p key={s.id}><b>{s.author}:</b> {s.content}</p>
        ))}
      </div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Deixe um recado..."
      />
      <button onClick={addScrap}>Postar</button>
    </div>
  );
}
