const startBtn = (function () {
    const module = {};

    module.create = function() {
        return `
            <button>Start</button>
        `
    }
    
    return {
        create: module.create
    }
})();