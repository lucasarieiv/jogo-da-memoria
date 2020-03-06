(function () {

    const {hash} = window.location;

    const paths = [];
    console.log(paths)
    paths[`${hash}`] = error;
    paths[""] = login;
    paths["#/game"] = game;
    paths["#/login"] = login;
    paths["#/signup"] = signup;
    console.log("Minha hash é " + hash)

    paths[hash]();

})();