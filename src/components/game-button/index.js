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

            .game-button.-active {
                display: none;
            }

            .game-block.-active {
                animation: blockAnimation 350ms cubic-bezier(0,3.33,.76,1.05);
                transform-origin: center;
                transform: scale(0)
            }

            @keyframes blockAnimation {
                0% {
                    transform: scale(1)
                }
                100% {
                    transform: scale(0);
                }
            }

        `

        $head.insertBefore($style, null)
    }


    module.render = () => {
        module._style();

        return `
            <section class="game-block"></section> 
            <button class="game-button" onClick="gameButton.handleClick()">Start</button>
        `
    }
    
    module.handleClick = () => {
        const $gameBlock = document.querySelector('.game-block')
        $gameBlock.classList.add('-active')
        document.querySelector('.game-button').classList.add('-active')

    }


    return {
        render: module.render,
        handleClick: module.handleClick
    }
})();