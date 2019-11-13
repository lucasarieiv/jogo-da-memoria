const $root = document.querySelector('#root')

const $cardsWrapper = createCardsWrapper()

const atr = {
    class: "",
    src: "",
    alt: ""
}


const memoryCard = createMemoryCard(
    atr.class = "",
    atr.src = "img/icon-collabcode.png",
    atr.alt = "Gueio o Mascote da Collacode"
);

const memoryCardFront = createMemoryCard(
    atr.class = "-front",
    atr.src = "img/icon-js.png",
    atr.alt = "Icone do Livro de Javascript"
);

const memoryCardJava = createMemoryCard(
    atr.class = "-front",
    atr.src = "img/icon-java.png",
    atr.alt = "Icone do Livro de Java"
)

const memoryCardCelular = createMemoryCard(
    atr.class = "-front",
    atr.src = "img/icon-celular.png",
    atr.alt = "Icone de um celular"
)

$cardsWrapper.insertAdjacentHTML('afterbegin', memoryCard)
$cardsWrapper.insertAdjacentHTML('afterbegin', memoryCard)
$cardsWrapper.insertAdjacentHTML('afterbegin', memoryCardCelular)
$cardsWrapper.insertAdjacentHTML('afterbegin', memoryCardCelular)
$cardsWrapper.insertAdjacentHTML('afterbegin', memoryCardJava)
$cardsWrapper.insertAdjacentHTML('afterbegin', memoryCardJava)
$cardsWrapper.insertAdjacentHTML('afterbegin', memoryCardFront)
$cardsWrapper.insertAdjacentHTML('afterbegin', memoryCardFront)




$root.insertAdjacentElement('beforeend', $cardsWrapper)

