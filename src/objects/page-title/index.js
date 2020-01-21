const pageTitle = (function() {
    module = {}

    module._style = () => {
        const $head = document.querySelector("head")
        const $style = document.createElement("style")

        $style.textContent = `
            .title {
                width: 100%;
                text-align: center;
            }
        `
        $head.insertAdjacentElement("beforeend", $style)
    }

    module.render = context => {
        module._style();

        return `
            <h1 class="title">${context}</h1>
        `
    }

    return {
        render: module.render
    }
})()