(function() {
    const $root = document.querySelector('#root');

    const $loginButton = flatButton.render("Log In");
    const $signUpButton = flatButton.render("Sign Up", true);

    const $logoCollabcode = logoCollabcode.render();
    const $titleCollabcode = titleCollabcode.render('Welcome!');
    
    const $logoWrapper = logoWrapper.render($logoCollabcode, $titleCollabcode);

    const $labelCollabcodeUsername = labelCollabcode.render("Username");
    const $inputCollabcodeUsername = inputCollabcode.render("text");

    const $labelCollabcodeEmail = labelCollabcode.render("E-mail");
    const $inputCollabcodeEmail = inputCollabcode.render("email");

    const $labelCollabcodePass = labelCollabcode.render("Password");
    const $labelCollabcodePassConfirm = labelCollabcode.render("Confirm password");
    const $inputCollabcodePass = inputCollabcode.render("password");

    const $buttonCollabcode = buttonCollabcode.render("Submit");


    $root.insertAdjacentHTML("beforeend", $loginButton);
    $root.insertAdjacentHTML("beforeend", $signUpButton);
    $root.insertAdjacentHTML("beforeend", $logoWrapper);
    $root.insertAdjacentHTML("beforeend", $labelCollabcodeUsername);
    $root.insertAdjacentHTML("beforeend", $inputCollabcodeUsername);
    $root.insertAdjacentHTML("beforeend", $labelCollabcodeEmail);
    $root.insertAdjacentHTML("beforeend", $inputCollabcodeEmail);
    $root.insertAdjacentHTML("beforeend", $labelCollabcodePass);
    $root.insertAdjacentHTML("beforeend", $inputCollabcodePass);
    $root.insertAdjacentHTML("beforeend", $labelCollabcodePassConfirm);
    $root.insertAdjacentHTML("beforeend", $inputCollabcodePass);
    $root.insertAdjacentHTML("beforeend", $buttonCollabcode);


})();