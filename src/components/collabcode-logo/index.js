const collabcodeLogo = (function() {
    const module = {}


    module._style = () => {
        const $head = document.querySelector("head")
        const $style = document.createElement("style")

        $style.textContent = `
            .logo-box {
                position: relative;
                top: -40px;
            }
        `

        $head.insertAdjacentElement("beforeend", $style)
    }

    module.render = () => {
        module._style();

        return `
            <img class="logo-box" src="../../img/icon-collabcode.png">
        `
    }

    return {
        render: module.render
    }

})()