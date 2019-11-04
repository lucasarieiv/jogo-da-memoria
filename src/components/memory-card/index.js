
function handleClick() {
    console.log('Cartão Sharkão, Yam Yam')
};

const $memoryCard = () => {
    const memoryCard = ` 
    <article class="memory-card">
    <img src="img/icon-collabcode.png" alt="Icone livro sobre javascript" class="icon" onClick="handleClick()" />
    </article> `;
    
    return memoryCard
}

const $memoryCardFront = () => {
    const memoryCardFront = `
    <article class="memory-card -front">
    <img src="img/icon-js.png" alt="Icone livro sobre javascript" class="icon" onClick="handleClick()" />
    </article> `;

    return memoryCardFront
}

