/**
 * Configurações globais do OIO ONE
 * - URLs
 * - Chaves
 * - Variáveis de ambiente
 */

export interface AppConfig {
  appName: string;
  themeColor: string;
  supabaseUrl: string;
  supabaseKey: string;
}

export function loadConfig(): AppConfig {
  return {
    appName: "OIO ONE",
    themeColor: "#4A00E0",
    supabaseUrl: "https://uqdwtzlkqaosnweyoyit.supabase.co",
    supabaseKey: "sb_publishable_uafBQD1aJ3w8_eq4meOsNQ_wzk8TwhA",
  };
}
