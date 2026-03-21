import { Cache } from './cache.js';
import { carregar } from './vibe.js';

export const App = {
    async renderizar(db, container) {
        const dados = Cache.isFresh() ? Cache.get() : await carregar(db);
        if(!Cache.isFresh()) Cache.set(dados);

        container.innerHTML = dados.map(v => `
            <div class="card">
                <p style="font-size:12px; color:var(--accent)">@${v.autor}</p>
                <button onclick="this.parentElement.innerHTML='<video src=\'${v.url}\' controls autoplay style=\'width:100%; border-radius:12px\'></video>'">▶️ ASSISTIR VIBE</button>
            </div>
        `).join('');
    }
};
