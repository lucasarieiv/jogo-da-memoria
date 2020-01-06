const gameButton = (function () {
    const module = {};

    module._style = () => {
        const $head = document.querySelector("head")
        const $style = document.createElement("style");
        
        $style.textContent = `
            .game-button {
                cursor: pointer;
                width: 100px;
                height: 100px;
                border-radius: 50%;
                position: absolute;
                bottom: 20px;
                left: 50%;
                transform: translate(-50%);
                background-color: #2ed573;
                color: #fff;
                font-weight: bold;
                border: 3px solid #fffcee;
                text-transform: uppercase;
                font-size: 1.05em;
                box-shadow: 0 3px 10px rgba(0,0,0, .3)
            }

            .game-block {
                position: absolute;
                display: block;
                width: 100%;
                height: 100%;
                top: 0;
                background-color: rgba(0,0,0,.5);
            }
        `

        $head.insertBefore($style, null)
    }
    
    module.render = () => {
        module._style();

        return `
            <section class="game-block"></section> 
            <button class="game-button">Start</button>
        `
    }

    return {
        render: module.render
    }
})();