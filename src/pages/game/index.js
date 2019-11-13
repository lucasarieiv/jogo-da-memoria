const $root = document.querySelector('#root')

const $cardsWrapper = createCardsWrapper()

const memoryCard = createMemoryCard(
    'img/icon-collabcode.png',
    'Gueio Mascote Collabcode'
);

const memoryCardFront = createMemoryCard(
    'img/icon-js.png',
    'Icone do Livro de Javascript',
    '-front'
);

const memoryCardJava = createMemoryCard(
    'img/icon-java.png',
    'Icone do Livro de Java',
    '-front'
)

const memoryCardCelular = createMemoryCard(
    'img/icon-celular.png',
    'Icone de um Celular',
    '-front'
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

