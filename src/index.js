const $root = document.querySelector('#root')
const $memoryCard = document.createElement('article')
const $memoryCardRound = document.createElement('article')
const $icon = `
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

$memoryCard.classList.add('memory-card')
$memoryCardRound.classList.add('memory-card', '-round')

$root.insertBefore($memoryCard, null)
$memoryCard.insertAdjacentHTML("afterbegin", $icon)


$root.insertBefore($memoryCardRound, null)
$memoryCardRound.insertAdjacentHTML("afterbegin", $iconJS)