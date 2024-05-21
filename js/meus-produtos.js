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
async function produtosAdicionados() {
    // Espera a resolução da chamada da API e armazena o resultado em apiArray
    const apiArray = await API.api();

    // Seleciona o elemento HTML com a classe 'card__section'
    const section = document.querySelector('.card__section');

    // Limpa o conteúdo existente na section
    section.innerHTML = '';

    // Itera sobre cada produto no array retornado pela API
    apiArray.forEach(produto => {
        // Cria os elementos HTML dinamicamente
        const productDiv = document.createElement('div');
        productDiv.classList.add('main__meus__produtos');

        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');

        const img = document.createElement('img');
        img.src = produto.imagem;
        img.alt = 'Imagen del producto';

        const infoDiv = document.createElement('div');
        infoDiv.classList.add('card-container--info');

        const productName = document.createElement('p');
        productName.textContent = produto.name;

        const valueDiv = document.createElement('div');
        valueDiv.classList.add('card-container--value');

        const productValue = document.createElement('p');
        productValue.textContent = `$ ${produto.valor}`;

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('apagar');
        deleteButton.id = produto.id;
        deleteButton.innerHTML = '<img src="./assets/lixeira-de-reciclagem.png" alt="Ícono de excluir">';


    valueDiv.appendChild(productValue);
    valueDiv.appendChild(deleteButton);
    infoDiv.appendChild(productName);
    infoDiv.appendChild(valueDiv);
    cardDiv.appendChild(img);
    cardDiv.appendChild(infoDiv);
    productDiv.appendChild(cardDiv);
    section.appendChild(productDiv);
    const botao = document.getElementById(produto.id)
        // Adiciona um event listener para apagar o cartão e fazer a requisição DELETE
        botao.addEventListener('click', async function(){
          const pergunta =   prompt('tem certeza que deseja excluir esse produto?')
            if(pergunta == "sim"){await API.deleteProdutos(produto.id)
            }
            
        })
           

    // Monta a estrutura do cartão
    
    });
}

// Chama a função para adicionar os produtos
produtosAdicionados();
