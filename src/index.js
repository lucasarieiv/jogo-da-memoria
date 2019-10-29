const $root = document.querySelector('#root')
const $memoryCard = document.createElement('article')
const $memoryCardFront = document.createElement('article')
const $memoryCard1 = document.createElement('article')
const $memoryCard2 = document.createElement('article')
const $memoryCard3 = document.createElement('article')
const $memoryCard4 = document.createElement('article')
const $memoryCard5 = document.createElement('article')
const $memoryCard6 = document.createElement('article')
const $memoryCard7 = document.createElement('article')
const $memoryCard8 = document.createElement('article')

const $iconCollab = `
    <img 
        src='img/icon-collabcode.png'
        alt='Gueio mascote da CollaCode'
        class='icon'
     />
`;

const $iconJS = `
    <img
        src='img/icon-js.png'
        alt='Livro Javascript'
        class='icon'
    />
`;


$root.insertBefore($memoryCard, null)
$root.insertBefore($memoryCardFront, null)
$root.insertBefore($memoryCard1, null)
$root.insertBefore($memoryCard2, null)
$root.insertBefore($memoryCard3, null)
$root.insertBefore($memoryCard4, null)
$root.insertBefore($memoryCard5, null)
$root.insertBefore($memoryCard6, null)
$root.insertBefore($memoryCard7, null)
$root.insertBefore($memoryCard8, null)


$memoryCard.classList.add('memory-card')
$memoryCard1.classList.add('memory-card')
$memoryCard2.classList.add('memory-card')
$memoryCard3.classList.add('memory-card')
$memoryCard4.classList.add('memory-card')
$memoryCard5.classList.add('memory-card')
$memoryCard6.classList.add('memory-card')
$memoryCard7.classList.add('memory-card')
$memoryCard8.classList.add('memory-card')

$memoryCardFront.classList.add('memory-card', '-front')



$memoryCard1.insertAdjacentHTML("afterbegin", $iconCollab)
$memoryCard2.insertAdjacentHTML("afterbegin", $iconCollab)
$memoryCard3.insertAdjacentHTML("afterbegin", $iconCollab)
$memoryCard4.insertAdjacentHTML("afterbegin", $iconCollab)
$memoryCard5.insertAdjacentHTML("afterbegin", $iconCollab)
$memoryCard6.insertAdjacentHTML("afterbegin", $iconCollab)
$memoryCard7.insertAdjacentHTML("afterbegin", $iconCollab)
$memoryCard8.insertAdjacentHTML("afterbegin", $iconCollab)


$memoryCard.insertAdjacentHTML("afterbegin", $iconCollab)
$memoryCardFront.insertAdjacentHTML("afterbegin", $iconJS)

