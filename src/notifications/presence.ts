import { supabase } from "../lib/supabaseClient";

/**
 * Atualiza status de presença do usuário
 */
export async function setPresence(userId: string, status: "online" | "offline") {
  const { error } = await supabase
    .from("profiles")
    .update({ presence: status })
    .eq("id", userId);

  if (error) throw error;
}

/**
 * Escuta mudanças de presença em tempo real
 */
export function subscribePresence(callback: (userId: string, status: string) => void) {
  const channel = supabase
    .channel("presence")
    .on(
      "postgres_changes",
      { event: "UPDATE", schema: "public", table: "profiles" },
      (payload) => {
        callback(payload.new.id, payload.new.presence);
      }
    )
    .subscribe();

  return () => {
    supabase.removeChannel(channel);
  };
}
