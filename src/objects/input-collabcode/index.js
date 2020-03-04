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
            .input-collabcode {
                display: block;
                width: 100%;
                color: #3a4042;
                font-size: 18px;
                font-weight: bold;
                border-bottom: 2px solid rgba(58, 64, 66, .5);
                padding: 12px 0;
            }
            .input-collabcode + .label-collabcode {
                margin-top: 30px;
            }
        `

        $head.insertAdjacentElement("beforeend", $style)
    }

    module.render = ({placeholder = "", type = "text"}) => {
        module._style();

        return `
            <input
                ${type == 'password' ? 'id="password"': ''}
                class="input-collabcode"
                type="${type}"
                placeholder="${placeholder}"
            />
        `
    }

    return {
        render: module.render,
        handleClick: module.handleClick
    } 
})();