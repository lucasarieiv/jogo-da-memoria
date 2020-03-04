const linkCollab = (function() {
    const module = {}

    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
        `
        $head.insertAdjacentElement("beforeend", $style)
    }

    module.render = ({href, content}) => {
        module._style();

        return `
            <a href="${href}">${content}</a>
        `
    }

    return {
        render: module.render
    }
})();