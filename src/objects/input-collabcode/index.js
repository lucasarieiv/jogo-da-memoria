const inputCollabcode = (function() {
    const module = {}

    module.handleClick = (event) => {
        const $img = event.target;
        
        $img.classList.toggle("-active");
        const $inputPassword = $img.parentNode.firstElementChild;

        if ($img.classList.contains("-active")) {
            $inputPassword.type = "text"
        } else {
            $inputPassword.type = "password"
        }
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

            .input-container + .btn-collabcode {
                margin-top: 45px;
            }

            .input-hidden {
                cursor: pointer;
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                right: 0;
                opacity: .5;
                transform: scale(1);
                transition: transform 300ms ease;
            }

            .input-hidden.-active {
                opacity: 1;
                transform: scale(1.1);
            }

        `

        $head.insertAdjacentElement("beforeend", $style)
    }

    module.render = ({placeholder = "", type = "text"}) => {
        module._style();

        return `
            <div class="input-container">
                <input class="input-collabcode" type="${type}" placeholder="${placeholder}"/>
                ${type == 'password' ? '<img onClick="inputCollabcode.handleClick(event)" class="input-hidden" src="../../../img/eye.png" alt="Icone olho">' : ''}
            </div>
        `
    }

    return {
        render: module.render,
        handleClick: module.handleClick
    } 
})();