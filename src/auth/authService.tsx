import { supabase } from "../lib/supabaseClient";

/**
 * Login com e-mail usando Magic Link
 */
export async function signInWithEmail(email: string) {
  const { data, error } = await supabase.auth.signInWithOtp({ email });
  if (error) throw error;
  return data;
}

/**
 * Registro de novo usuário
 */
export async function registerUser(email: string, username: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password: Math.random().toString(36).slice(-8), // senha temporária
    options: {
      data: { username },
    },
  });
  if (error) throw error;
  return data;
}

/**
 * Reset de senha
 */
export async function resetPassword(email: string) {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email);
  if (error) throw error;
  return data;
}
