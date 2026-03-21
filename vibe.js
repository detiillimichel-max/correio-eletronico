export async function carregar(db) {
    try {
        console.log("OIO ONE: Motor buscando vídeos...");
        // Busca o vídeo mais recente do Firebase
        const snapshot = await db.ref('vibes').limitToLast(1).once('value');
        let lista = [];
        snapshot.forEach(child => {
            lista.push({ id: child.key, ...child.val() });
        });
        return lista;
    } catch (e) {
        console.error("Erro no Motor:", e);
        return [];
    }
}
