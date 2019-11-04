
function handleClick() {
    console.log('Cartão Sharkão, Yam Yam')
};

const $memoryCard = (className) => {
    const memoryCard = ` 
    <article class="memory-card ${className}">
    <img src="img/icon-collabcode.png" alt="Icone livro sobre javascript" class="icon" onClick="handleClick()" />
    </article> `;
    
    return memoryCard
}

