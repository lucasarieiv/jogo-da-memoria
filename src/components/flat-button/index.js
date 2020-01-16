const flatButton = (function() {
    const module = {};

    module._style = () => {
        const $head = document.querySelector("head")
        const $style = document.createElement("style")
        
        $style.textContent = `
            .flatButton {
                background-color: #eae6da;
                color: #fffcee;
                font-size: 24px;
                font-weight: bold;
                letter-space: 0.58px;
                width: 186px;
                height: 176px;
                font-family: inherit;
                text-transform: uppercase;
            }
        `

        $head.insertAdjacentElement("beforeend", $style)
    }

    module.render = context => {
        module._style()

        return `
            <button class="flatButton -active">${context}</button>
        `
    };

    return {
        render: module.render
    }
})()