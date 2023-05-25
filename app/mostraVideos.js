import { conectaApI } from "./conectaAPI.js";

const lista = document.querySelector('.videos__container');

export default function constroiCard(titulo, descricao, url, imagem) {
    const video = document.createElement("li");
    video.className = "videos__item";
    video.innerHTML = `
    <iframe width="100%" height="72%" src="${url}"
                title=${titulo} frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            <div class="descricao-video">
                <img src="${imagem}">
                <h3>${titulo}</h3>
                <p>${descricao}</p>
            </div>
    `
    return video
}

async function listaVideos() {
    try{ const listaApi = await conectaApI.listaVideos()
    listaApi.forEach(video => lista.appendChild(
        constroiCard(video.titulo, video.descricao, video.url, video.imagem)
    ))
}
    catch{
        lista.innerHTML = `<h2 class = "mensagem__titulo"> não foi possível carregar a lista de vídeos</h2>`
    }}

listaVideos()