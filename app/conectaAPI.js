async function listaVideos() {
    const buscaApi = await fetch('http://localhost:3000/videos')
    const converte = await buscaApi.json()
    return converte

}

export default async function criaVideo(titulo, descricao, url, imagem ) {
    const conexao = await fetch('http://localhost:3000/videos', {
    method: "POST",
    headers: {
        "Content-type": "aplication/json"
    },
    body: JSON.stringify({
        titulo: titulo,
        descricao: descricao,
        url: url,
        imagem: imagem
        
        })
    })
    if(!conexao.ok){
        throw new Error("não foi possível enviar o vídeo")
    }
    const converteConexao = await conexao.json()

    return converteConexao
}

async function buscaVideos(termoDeBusca) {
    const conexoes = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`)
    const conexaoConvertida = conexoes.json()

    return conexaoConvertida
}

export const conectaApI = {
    listaVideos,
    criaVideo,
    buscaVideos
}
