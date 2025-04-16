const listaComprasCozinha = ['arroz','feijão','café','açúcar','sal','macarrão','azeitona','óleo','maionese','maisena','óleo de coco','leite condensado','leite','creme de leite','coco ralado','molho shoyo','papel toalha','tempero','bolacha','alho','cebola','frutas','legumes','verduras']
const listaComprasLimpeza = ['quiboa','detergente','bombril','esponja louça','sabão em pó','sabão em barra','saco de lixo']
const listaComprasBanheiro = ['papel higiênico','sabonete','pasta de dente','escova de dente','fio dental','enxaguante bucal','cotonete','algodão','acetona','shampoo','condicionador']

const listaComprasCozinhaOrdenada = listaComprasCozinha.sort()
const listaComprasLimpezaOrdernada = listaComprasLimpeza.sort()
const listaComprasBanheiroOrdenada = listaComprasBanheiro.sort()

const ulCozinha = document.querySelector('.listaConteudoCozinha')
const ulLimpeza = document.querySelector('.listaConteudoLimpeza')
const ulBanheiro = document.querySelector('.listaConteudoBanheiro')
ulCozinha.innerHTML = ''
ulLimpeza.innerHTML = ''
ulBanheiro.innerHTML = ''

window.onload =  () => {
    adicionaItems()
}

function adicionaItems(){
    listaComprasCozinhaOrdenada.forEach((item) => {
        criaElementoLista(ulCozinha,item)
    })
    listaComprasLimpezaOrdernada.forEach((item) => {
        criaElementoLista(ulLimpeza,item)
    })
    listaComprasBanheiroOrdenada.forEach((item) => {
        criaElementoLista(ulBanheiro,item)
    })
}

function criaElementoLista(lista,textoElemento){
    const li = document.createElement('li')
    li.classList.add('itemListaConteudo')

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.classList.add('checkMark')

    const label = document.createElement('label')
    label.classList.add('itemDesc')
    label.textContent = `${textoElemento}`

    li.appendChild(label)
    li.appendChild(checkbox)
    lista.appendChild(li)
}