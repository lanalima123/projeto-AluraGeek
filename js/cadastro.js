import { API } from "./script.js";

async function cadastrarProdutos(evento){
    evento.preventDefault()
    const name = document.getElementById('nome').value
    const imagem = document.getElementById('imagem').value
    const preco = document.getElementById('preco').value
    try {
        await API.apiPost(name, preco, imagem)

        alert('produto enviado')
    } catch (e) {
        alert(e);
    }
    

}

const formulario = document.querySelector('.formulario')
formulario.addEventListener('submit', evento => cadastrarProdutos(evento))