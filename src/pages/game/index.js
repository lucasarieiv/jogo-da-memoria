const $root = document.querySelector('#root')

const $cardsWrapper = createCardsWrapper()

const memoryCard = $memoryCard()
const memoryCardFront = $memoryCardFront()

$cardsWrapper.insertAdjacentHTML('afterbegin', memoryCard)
$cardsWrapper.insertAdjacentHTML('afterbegin', memoryCardFront)
$cardsWrapper.insertAdjacentHTML('afterbegin', memoryCard)
$cardsWrapper.insertAdjacentHTML('afterbegin', memoryCardFront)
$cardsWrapper.insertAdjacentHTML('afterbegin', memoryCard)
$cardsWrapper.insertAdjacentHTML('afterbegin', memoryCard)
$cardsWrapper.insertAdjacentHTML('afterbegin', memoryCard)
$cardsWrapper.insertAdjacentHTML('afterbegin', memoryCard)

// $cardsWrapper.insertAdjacentHTML('afterbegin', $memoryCard)
// $cardsWrapper.insertAdjacentHTML('afterbegin', $memoryCard)


$root.insertAdjacentElement('beforeend', $cardsWrapper)

