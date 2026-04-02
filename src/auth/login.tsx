// src/auth/login.tsx
import React, { useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function Login({ onLogin }: { onLogin: (userId: string) => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert("Erro no login: " + error.message);
      return;
    }

    const user = data.user;
    if (user) {
      // Buscar perfil do usuário
      const { data: profile } = await supabase
        .from("profiles")
        .select("name, photo_url")
        .eq("id", user.id)
        .single();

      // Se não existir perfil, cria um vazio
      if (!profile) {
        await supabase.from("profiles").insert({
          id: user.id,
          name: "Usuário",
          photo_url: "",
        });
      }

      onLogin(user.id); // Redireciona para o chat
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ display: "block", marginBottom: 10 }}
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ display: "block", marginBottom: 10 }}
      />

      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
}