const layerStart = (function() {
    const module = {};

    module.handleClick = () => {
        console.log('Aee')
    }

    module.render = (content) => {
        const $transparenceLayer = transparenceLayer.render();
        const $gameButton = gameButton.render(content);

        return `
            <div class="layer-start" onClick="layerStart.handleClick()">
                ${$transparenceLayer}
                ${$gameButton}
            </div>
        `;
    };

    return {
        render: module.render,
        handleClick: module.handleClick
    }
})()