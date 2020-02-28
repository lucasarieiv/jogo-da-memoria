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

    module._children = () => {
        const $usernameLabel = labelCollabcode.render("Username");
        const $usernameInput = inputCollabcode.render("text", "Name-example");
    
        const $emailLabel = labelCollabcode.render("E-mail");
        const $emailInput = inputCollabcode.render("email", "");
    
        const $labelPassword = labelCollabcode.render("Password");
        const $confirmLabelPassword = labelCollabcode.render("Confirm password");
        const $inputCollabcodePass = inputCollabcode.render("password", "**********");
    
        const $btnCollabcode = btnCollabcode.render("Submit");

        return `
            ${$usernameLabel}
            ${$usernameInput}
            
            ${$emailLabel}
            ${$emailInput}

            ${$labelPassword}
            ${$inputCollabcodePass}

            ${$confirmLabelPassword}
            ${$inputCollabcodePass}

            ${$btnCollabcode}
        `
    }
    
    
    module.render = () => {
        module._style();
        return `
            <form class="form-collabcode" action="" method="POST">
                ${module._children()}
            </form>
        `
    };

    return {
        render: module.render
    }
})()