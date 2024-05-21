async function api(){
    const fetchApi = await fetch('http://localhost:3000/users')
 
    const apiTraduzida = await fetchApi.json()
    return apiTraduzida
}

async function apiPost(name, preco, imagem){
    const fetchApiPost= await fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            valor: `R$ ${preco}`,
            imagem: imagem
        })})
        const fetchApiPostConvertida =await fetchApiPost.json()
        console.log
        return fetchApiPostConvertida
    }
   
async function deleteProdutos(id){
await fetch(`http://localhost:3000/users/${id}`,
     {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json' // Inclua quaisquer cabeçalhos necessários
          }
    })
   
}
export const API={
    api,
    apiPost,
    deleteProdutos
}
