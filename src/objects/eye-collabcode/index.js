const eyeCollabcode = (function() {
    const module = {};

    module._style = () => {};

    module.render = () => {
        module._style();
        
        return `
            <label>Mostrar senha</label>
        `;
    }
    
    return {
        render: module.render
    }
})();