(function () {

    const {hash} = window.location;

    const paths = [];
    console.log(paths)
    paths[`${hash}`] = status404;
    paths[""] = login;
    paths["#/login"] = login;
    paths["#/signup"] = signup;
    paths["#/game"] = game;
    
    paths[hash]();
})();