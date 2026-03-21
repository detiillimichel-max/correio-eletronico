/* 🚀 UPLOADER OIO ONE - EXPANDIDO PARA 30s (10MB) */
export const Uploader = {
    async enviar(db, file, autor) {
        // Novo limite: 10MB (Aproximadamente 30 segundos de vídeo HD)
        const limiteMB = 10 * 1024 * 1024; 
        
        if (file.size > limiteMB) {
            alert("⚠️ Vídeo muito longo! O limite para 30s é 10MB.");
            return false;
        }

        const reader = new FileReader();
        reader.onload = async (e) => {
            await db.ref('vibes').push({
                url: e.target.result,
                autor: autor,
                time: Date.now()
            });
            localStorage.removeItem('vibe_cache'); // Limpa cache para ver o novo
            location.reload();
        };
        reader.readAsDataURL(file);
    }
};
