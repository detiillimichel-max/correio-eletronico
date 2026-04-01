import { supabase } from "../lib/supabaseClient";
import { loadConfig } from "./config";
import { logger } from "./logger";

/**
 * Inicializa o aplicativo OIO ONE
 * - Carrega configurações
 * - Conecta ao Supabase
 * - Registra eventos iniciais
 */
export async function initApp() {
  const config = loadConfig();
  logger.info("Iniciando OIO ONE...");

  try {
    // Teste de conexão com Supabase
    const { data, error } = await supabase.from("profiles").select("count");
    if (error) throw error;

    logger.info("Conexão com Supabase estabelecida.");
    return { success: true, config };
  } catch (err) {
    logger.error("Erro ao inicializar o app", err);
    return { success: false, error: err };
  }
}
