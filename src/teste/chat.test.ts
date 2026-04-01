import { describe, it, expect } from "vitest";
import { sendMessage } from "../chat/useChat";

describe("Chat Module", () => {
  it("deve enviar mensagem de texto", async () => {
    const result = await sendMessage("user1", "user2", "Olá mundo!");
    expect(result).toBeDefined();
  });

  it("deve enviar mensagem de imagem", async () => {
    const result = await sendMessage("user1", "user2", "img.png", "image");
    expect(result).toBeDefined();
  });

  it("deve enviar mensagem de áudio", async () => {
    const result = await sendMessage("user1", "user2", "voice.mp3", "audio");
    expect(result).toBeDefined();
  });
});
