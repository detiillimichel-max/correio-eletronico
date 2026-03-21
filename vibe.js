export async function carregar(db) {
    console.log("🎬 OIO ONE: Busca única (once) iniciada.");
    // Regra: Limite de 10 itens para performance
    const snap = await db.ref('vibes').limitToLast(10).once('value');
    let lista = [];
    snap.forEach(c => {
        lista.push({ id: c.key, ...c.val() });
    });
    return lista.reverse();
}

