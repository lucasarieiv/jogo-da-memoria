const createMemoryCard = ({src,alt,nameClass}) => {

    return `
        <article class="memory-card ${nameClass}">
            <img 
                src="${src}"
                alt="${alt}"
                class="icon" onClick="handleClick()"
            />
        </article> `
};


const handleClick = () => {
    console.log('aee')
}

const $link = document.createElement('link')

$link.setAttribute("href","src/components/memory-card/style.css");
$link.setAttribute("rel","stylesheet")
