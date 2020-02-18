(function() {
    const $root = document.querySelector('#root');

    const $loginButton = flatButton.render("Log In");
    const $signUpButton = flatButton.render("Sign Up", true);

    const $logoCollabcode = logoCollabcode.render();
    const $titleCollabcode = titleCollabcode.render('Welcome!');
    
    const $logoWrapper = logoWrapper.render($logoCollabcode, $titleCollabcode);

    const $labelCollabcode = labelCollabcode.render("E-mail");
    const $inputCollabcode = inputCollabcode.render();

    $root.insertAdjacentHTML("beforeend", $loginButton);
    $root.insertAdjacentHTML("beforeend", $signUpButton);
    $root.insertAdjacentHTML("beforeend", $logoWrapper)
    $root.insertAdjacentHTML("beforeend", $labelCollabcode)
    $root.insertAdjacentHTML("beforeend", $inputCollabcode)
})();