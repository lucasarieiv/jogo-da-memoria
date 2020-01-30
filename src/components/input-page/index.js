const inputPage = (function() {
    const module = {}

    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
            .input-page {
                margin: 0 auto;
                margin-top: 30px;
                width: 85%;
            }

            .input-page > .title {
                display: block;
                color: #c2c4c5;
                font-size: 16px;
            }

            .input-page > .input {
                width: 100%;
                color: #3a4042;
                font-size: 18px;
                font-weight: bold;
                padding: 12px 0;
                border-bottom: 2px solid #c2c4c5;
            }

            .input-page > .input::placeholder {
                font-family: Comfortaa;
                opacity: 1;
                color: #3a4042;
                font-weight: bold;
            }
        `

        $head.insertAdjacentElement("beforeend", $style)
    }

    module.render = ({label, placeholder}) => {
        module._style();

        return `
            <div class="input-page">
                <label class="title">${label}</label>
                <input class="input" type="email" placeholder="${placeholder}"/>
            </div>
        `
    }

    return {
        render: module.render
    }
})();