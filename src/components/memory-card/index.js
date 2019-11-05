

const createMemoryCard = className => `
    <article class="memory-card ${className}">
        <img 
            src="img/icon-collabcode.png"
            alt="Icone livro sobre javascript"
            class="icon" onClick="handleClick()"
        />
    </article> `;


const createMemoryCardFront = className => `
    <article class="memory-card ${className}">
        <img 
            src="img/icon-collabcode.png"
            alt="Icone livro sobre javascript"
            class="icon" onClick="handleClick()"
        />
    </article> `;


const handleClick = () => console.log('Aeee')
