const btnCollabcode = (function(){
    const module = {};
    
    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");
        
        $style.textContent = `
            .btn-collabcode {
                background-color: #f25a70;
                text-transform: uppercase;
                border: none;
                color: #fff;
                width: 100%;
                height: 48px;
                border-radius: 30px;
                font-weight: bold;
                font-size: 14px;
                cursor: pointer;
            }

            .input-collabcode + .btn-collabcode {
                margin-top: 45px;
            }
        `

        $head.insertAdjacentElement("beforeend", $style)
    };

    module.handleClick = (event, path) => {
        event.preventDefault();
        location.hash = `#/${path}`;
        location.reload(true);
    }

    module.render = ({context = "", path = ""}) => {
        module._style();

        return `
            <input 
                class="btn-collabcode"
                type="submit"
                value="${context}"
                onclick="btnCollabcode.handleClick(event, '${path}')">`
    };

    return {
        render: module.render,
        handleClick: module.handleClick
    }

})();