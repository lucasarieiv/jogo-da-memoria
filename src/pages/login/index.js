(function (){
    const $root = document.querySelector("#root");

    const $loginButton = flatButton.render("Log In", true);
    const $signUpButton = flatButton.render("Sign Up");

    const $logoCollabcode = logoCollabcode.render();
    const $titleCollabcode = titleCollabcode.render("Hello!");

    const $logoWrapper = logoWrapper.render($logoCollabcode, $titleCollabcode);
    const $formLogin = formCollabcode.render("Login");
    
    $root.insertAdjacentHTML("beforeend", $loginButton);
    $root.insertAdjacentHTML("beforeend", $signUpButton);
    $root.insertAdjacentHTML("beforeend", $logoWrapper);
    $root.insertAdjacentHTML("beforeend", $formLogin)
    
    

})();