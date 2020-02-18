const buttonCollabcode = (function(){
    const module = {};
    
    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");
        
        $style.textContent = `
            .button-collabcode {
                background-color: #f25a70;
                text-transform: uppercase;
                border: none;
                padding: 18px;
                color: #fff;
                width: 100%;
                border-radius: 30px;
                font-weight: bold;
                font-size: 14px;
            }
        `

        $head.insertAdjacentElement("beforeend", $style)
    };

    module.render = context => {
        module._style();

        return `
            <button class="button-collabcode" type="submit">${context}</button>
        `
    };

    return {
        render: module.render
    }

})();