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

$cardsWrapper.insertAdjacentHTML('afterbegin', memoryCard)
$cardsWrapper.insertAdjacentHTML('afterbegin', memoryCard)
$cardsWrapper.insertAdjacentHTML('afterbegin', memoryCard)
$cardsWrapper.insertAdjacentHTML('afterbegin', memoryCard)
$cardsWrapper.insertAdjacentHTML('afterbegin', memoryCard)
$cardsWrapper.insertAdjacentHTML('afterbegin', memoryCard)
$cardsWrapper.insertAdjacentHTML('afterbegin', memoryCardFront)
$cardsWrapper.insertAdjacentHTML('afterbegin', memoryCardFront)




$root.insertAdjacentElement('beforeend', $cardsWrapper)

