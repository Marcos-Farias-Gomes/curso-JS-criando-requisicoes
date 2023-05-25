import { conectaApI } from "./conectaAPI.js";
import constroiCard from "./mostraVideos.js"

async function buscarVideo(evento) {
   evento.preventDefault()

   const dadosDePesquisa = document.querySelector("[data-pesquisa]").value
   const busca = await conectaApI.buscaVideos(dadosDePesquisa)

   const lista = document.querySelector("[data-lista]")
   while(lista.firstChild) {
      lista.removeChild(lista.firstChild)
   }
   busca.forEach(video => lista.appendChild(constroiCard(video.titulo, video.descricao, video.url, video.imagem)))

   if(busca.length === 0) {
      lista.innerHTML = `<h2 class="mensagem__titulo"> não existe um video com esse termo </h2>`
   }
}

const botaoDePesquisa = document.querySelector("[data-botaoDePesquisa]")
const areaDePesquisa = document.querySelector("[data-pesquisa]")

botaoDePesquisa.addEventListener("click", evento =>  buscarVideo(evento))
areaDePesquisa.onkeydown = evento =>{
   if ( evento.code === 'Enter') {
      buscarVideo(evento)
  }
}