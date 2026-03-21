export async function carregar(db) {
    console.log("🎬 OIO ONE: Buscando vídeos...");
    const snapshot = await db.ref('vibes').limitToLast(1).once('value');
    let lista = [];
    snapshot.forEach(child => {
        lista.push({ id: child.key, ...child.val() });
    });
    return lista.reverse();
}
