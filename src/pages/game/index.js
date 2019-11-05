const $root = document.querySelector('#root')

const $cardsWrapper = createCardsWrapper()

const memoryCard = createMemoryCard()
const memoryCardFront = createMemoryCard('-front')

$cardsWrapper.insertAdjacentHTML('afterbegin', memoryCard)
$cardsWrapper.insertAdjacentHTML('afterbegin', memoryCardFront)


// $cardsWrapper.insertAdjacentHTML('afterbegin', $memoryCard)
// $cardsWrapper.insertAdjacentHTML('afterbegin', $memoryCard)


$root.insertAdjacentElement('beforeend', $cardsWrapper)

