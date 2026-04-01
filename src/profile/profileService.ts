import { supabase } from "../lib/supabaseClient";

/**
 * Busca perfil de usuário
 */
export async function getProfile(id: string) {
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", id)
    .single();
  if (error) throw error;
  return data;
}

/**
 * Atualiza bio do usuário
 */
export async function updateBio(id: string, bio: string) {
  const { data, error } = await supabase
    .from("profiles")
    .update({ bio })
    .eq("id", id);
  if (error) throw error;
  return data;
}

/**
 * Atualiza vibe status
 */
export async function updateVibeStatus(id: string, status: string) {
  const { data, error } = await supabase
    .from("profiles")
    .update({ vibe_status: status })
    .eq("id", id);
  if (error) throw error;
  return data;
}
