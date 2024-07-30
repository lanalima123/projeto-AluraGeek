import { API } from "./script.js";
produtosAdicionados()
/*i
async function produtosAdicionados(){
    const apiArray = await API.api()
    apiArray.forEach(produto => {
        const section = document.querySelector('.card__section')
        section.innerHTML+= `<div class="main__meus__produtos">
        <div class="card">
            <img src="${produto.imagem}" alt="Imagen del producto">
            <div class="card-container--info">
                <p>${produto.name}</p>
                <div class="card-container--value">
                    <p>$ ${produto.valor} </p>
                    <button class="apagar" id="${produto.id}"><img src="./assets/lixeira-de-reciclagem.png"  alt="Ícono de excluir"></button>
                </div>
            </div>
        </div>
    </div>`;
         
    })}
        
export{
    produtosAdicionados
}*/
function controiCard(imagem, name,valor,id){
    const produtos = document.createElement("div")
    produtos.classList.add('main__meus__produtos')
    produtos.innerHTML = `<div class="card">
    <img src="${imagem}" alt="Imagen del producto">
    <div class="card-container--info">
        <p>${name}</p>
        <div class="card-container--value">
            <p>$ ${valor} </p>
            <button class="apagar" id="${id}"><img src="./assets/lixeira-de-reciclagem.png"  alt="Ícono de excluir"></button>
        </div>
    </div>
</div>`
return produtos
}
async function produtosAdicionados() {
    // Espera a resolução da chamada da API e armazena o resultado em apiArray
    const apiArray = await API.api();

    // Seleciona o elemento HTML com a classe 'card__section'
    const section = document.querySelector('.card__section');

    // Limpa o conteúdo existente na section
    section.innerHTML = '';

    // Itera sobre cada produto no array retornado pela API
    apiArray.forEach(produto => {
        section.appendChild(controiCard(produto.imagem, produto.name, produto.valor,produto.id))
        const bt = document.getElementById(produto.id)
        bt.addEventListener("click", ()=>{
            const pergunta = confirm('Tem certeza que deseja excluir esse produto?');

            if (pergunta) {
                // O usuário clicou em "Sim"
                console.log('Produto excluído.');
                let nome =[produto.name, produto.valor, produto.imagem, produto.id]
                
                console.log(nome)
            } else {
                // O usuário clicou em "Não"
                console.log('Ação cancelada.');
            }

        })
}
)

}
