(function() {
    const $root = document.querySelector('#root')
    const $flatButton = flatButton.render("Log In")

    $root.insertAdjacentHTML("afterbegin", $flatButton)
})()