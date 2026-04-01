import React, { useState } from "react";
import { resetPassword } from "./authService";

export function ResetPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleReset = async () => {
    try {
      await resetPassword(email);
      alert("Verifique seu e-mail para redefinir a senha.");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Redefinir Senha</h2>
      <input
        type="email"
        placeholder="Digite seu e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleReset}>Enviar Link</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
