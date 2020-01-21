(function() {
    const $root = document.querySelector('#root');
    const $loginButton = flatButton.render("Log In");
    const $signUpButton = flatButton.render("Sign Up", true);
    const $collabcodeLogo = collabcodeLogo.render();
    const $pageTitle = pageTitle.render("Welcome")

    $root.insertAdjacentHTML("beforeend", $loginButton);
    $root.insertAdjacentHTML("beforeend", $signUpButton);
    $root.insertAdjacentHTML("beforeend", $collabcodeLogo)
    $root.insertAdjacentHTML("beforeend", $pageTitle)
})();