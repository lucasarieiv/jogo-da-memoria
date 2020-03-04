const inputCollabcode = (function() {
    const module = {}

    module.handleClick = (event) => {
        const $img = event.target;
        $img.classList.toggle("-active");
    }

    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");
        
        $style.textContent = `

            .input-container {
                position: relative;
            }

            .input-collabcode {
                display: block;
                width: 100%;
                color: #3a4042;
                font-size: 18px;
                font-weight: bold;
                border-bottom: 2px solid rgba(58, 64, 66, .5);
                padding: 12px 0;
            }
            .input-container + .label-collabcode {
                margin-top: 30px;
            }

            .input-hidden {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                right: 0;
                opacity: .5;
            }

            .input-hidden.-active {
                opacity: 1;
            }

        `

        $head.insertAdjacentElement("beforeend", $style)
    }

    module.render = ({placeholder = "", type = "text"}) => {
        module._style();

        return `
            <div class="input-container">
                <input class="input-collabcode" type="${type}" placeholder="${placeholder}"/>
                ${type == 'password' ? '<img onClick="inputCollabcode.handleClick(event)" class="input-hidden" src="../../../img/hidden.png" alt="Icone olho">' : ''}
            </div>
        `
    }

    return {
        render: module.render,
        handleClick: module.handleClick
    } 
})();