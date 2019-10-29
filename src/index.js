const $root = document.querySelector('#root')
const $memoryCardFront = document.createElement('article');

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


for (cont = 1; cont < 10; cont++) {
    const $memoryCard = document.createElement('article')
    $memoryCard.classList.add('memory-card')
    $root.insertBefore($memoryCard, null)
    $memoryCard.insertAdjacentHTML('afterbegin', $iconCollab)
}

$memoryCardFront.classList.add('memory-card', '-front')
$root.insertAdjacentElement("afterbegin",$memoryCardFront)
$memoryCardFront.insertAdjacentHTML("afterbegin", $iconJS)

