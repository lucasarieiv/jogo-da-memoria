const collabcodeLogo = (function() {
    const module = {}


    module._style = () => {
        const $head = document.querySelector("head")
        const $style = document.createElement("style")

        $style.textContent = ``
    }

    module.render = () => {
        return `
            <img class="logo-box" src="../../img/icon-collabcode.png">
        `
    }

    return {
        render: module.render
    }

})()