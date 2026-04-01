/**
 * Sincroniza contatos do dispositivo usando Contact Picker API
 * (disponível em navegadores modernos e Android)
 */

export async function syncContacts() {
  try {
    // @ts-ignore - Contact Picker API experimental
    const contacts = await navigator.contacts.select(["name", "tel", "email"], {
      multiple: true,
    });
    return contacts;
  } catch (err) {
    console.error("Erro ao sincronizar contatos:", err);
    return [];
  }
}
