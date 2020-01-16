(function() {
    const $root = document.querySelector('#root')
    const $flatButton = flatButton.render("Log In")
    const $flatButtonActive = flatButton.render("Log In")

    $root.insertAdjacentHTML("afterbegin", $flatButton)
    $root.insertAdjacentHTML("afterbegin", $flatButtonActive)
})()