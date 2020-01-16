(function() {
    const $root = document.querySelector('#root')
    const $flatButton = flatButton.render("Log In")
    const $flatButtonActive = flatButton.render("Sign Up")

    $root.insertAdjacentHTML("afterbegin", $flatButton)
    $root.insertAdjacentHTML("afterend", $flatButtonActive)
})()