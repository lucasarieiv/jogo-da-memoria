function createMemoryCard() {
    const $memoryCard = document.createElement('article')
    $wrapCards.insertBefore($memoryCard, null)

    const $icon = `
    <img 
        src="img/icon-collabcode.png"
        alt="Logo do mascote da CollabCode"
        class="icon"
    />
    `;

    $memoryCard.classList.add('memory-card')

    $memoryCard.insertAdjacentHTML('afterbegin', $icon)
}


function createMemoryCardFront() {

    const $memoryCardFront = document.createElement('article')

    const $iconJs = `
    <img
        src="img/icon-js.png"
        alt="Icone livro sobre javascript"
        class="icon"
    />
    `;

    $memoryCardFront.classList.add('memory-card', '-front')
    $wrapCards.insertBefore($memoryCardFront, null)
    
    $memoryCardFront.insertAdjacentHTML('afterbegin', $iconJs)

}