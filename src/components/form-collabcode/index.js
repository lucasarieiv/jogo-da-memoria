const formCollabcode = (function() {
    const module = {}

    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
            .form-collabcode {
                padding: 0 35px 40px;
            }
        `;

        $head.insertAdjacentElement("beforeend", $style);
    }

    module._children = (form) => {

        const $usernameLabel = labelCollabcode.render("Username");
        const $usernameInput = inputCollabcode.render("Name-example");
    
        const $emailLabel = labelCollabcode.render("E-mail");
        const $emailInput = inputCollabcode.render("example@email.com", "email");
    
        const $labelPassword = labelCollabcode.render("Password");
        const $confirmLabelPassword = labelCollabcode.render("Confirm password");
        const $inputCollabcodePass = inputCollabcode.render("**********", "password");
    
        const $btnCollabcode = btnCollabcode.render(form ? "Login" : "Submit");

        return form == "Signup" ? `
            ${$usernameLabel}
            ${$usernameInput}
            
            ${$emailLabel}
            ${$emailInput}

            ${$labelPassword}
            ${$inputCollabcodePass}

            ${$confirmLabelPassword}
            ${$inputCollabcodePass}

            ${$btnCollabcode}
        `:
        `
            ${$emailLabel}
            ${$emailInput}

            ${$labelPassword}
            ${$inputCollabcodePass}
            ${$btnCollabcode}
        `
    }
    
    
    module.render = (form) => {
        module._style();
        return `
            <form class="form-collabcode" action="" method="POST">
                ${module._children(form)}
            </form>
        `
    };

    return {
        render: module.render
    }
})()