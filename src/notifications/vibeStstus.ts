import { supabase } from "../lib/supabaseClient";

/**
 * Atualiza vibe status do usuário
 */
export async function setVibeStatus(userId: string, vibe: string) {
  const { error } = await supabase
    .from("profiles")
    .update({ vibe_status: vibe })
    .eq("id", userId);

  if (error) throw error;
}

/**
 * Escuta mudanças de vibe status em tempo real
 */
export function subscribeVibeStatus(callback: (userId: string, vibe: string) => void) {
  const channel = supabase
    .channel("vibe-status")
    .on(
      "postgres_changes",
      { event: "UPDATE", schema: "public", table: "profiles" },
      (payload) => {
        callback(payload.new.id, payload.new.vibe_status);
      }
    )
    .subscribe();

  return () => {
    supabase.removeChannel(channel);
  };
}
