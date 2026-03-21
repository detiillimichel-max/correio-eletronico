import { carregar } from './vibe.js';

export const App = {
    async inicializar(db) {
        try {
            console.log("OIO ONE: Maestro iniciando...");
            const dados = await carregar(db);
            return dados;
        } catch (e) {
            console.error("Erro no Maestro:", e);
            return [];
        }
    }
};
