(function() {
    const $root = document.querySelector('#root')
    const $flatButton = flatButton.render(
        {
            context: "Log In",
            variation: "-active"
        }
    )
    const $flatButtonActive = flatButton.render(
        {
            context: "Sign Up",
        }
    )

    $root.insertAdjacentHTML("afterbegin", $flatButton)
    $root.insertAdjacentHTML("afterend", $flatButtonActive)
})()