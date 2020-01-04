const startBtn = (function () {
    const module = {};

    module._style = function() {
        const $head = document.querySelector('head')
        const $style = document.createElement("style");
        
        $style.textContent = `
            .btn-start {
                display: block;
                width: 100px;
                height: 100px;
                font-size: 1.2em;
                border-radius: 100px;
                border: none;
                background-color: #fff;
                border: 4px solid #3a4042;
                color: #3a4042;
                position: absolute;
                bottom: 10%;
                left: 50%;
                transform: translateX(-50%);
            }

        `

        $head.insertBefore($style, null)
    }
    
    module.create = function() {
        module._style();

        return `
            <button class="btn-start">Start</button>
        `
    }

    return {
        create: module.create
    }
})();