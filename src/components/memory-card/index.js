const createMemoryCard = (nameClass,src, alt) => { 
    return `
        <article class="memory-card ${nameClass}">
            <img 
                src="${src}"
                alt="${alt}"
                class="icon" onClick="handleClick()"
            />
        </article> `
};

const handleClick = () => console.log('Aeee')
