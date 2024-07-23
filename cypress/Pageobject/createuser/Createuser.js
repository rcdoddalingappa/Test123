class createaccount {
    createacuntbutton() {
        return "Create an Account"
    }

    firstnameinput() {
        return 'input[title="First Name"]'
    }
    lastnameinput() {
        return 'input[title="Last Name"]'
    }
    Emailidinput() {
        return 'input[title="Email"]'
    }
    passwordinput() {
        return 'input[title="Password"]'
    }
    confirmpasswordinput() {
        return 'input[title="Confirm Password"]'
    }
    submitbutton() {
        return 'button[title="Create an Account"]'
    }
    assertinput(){
        return 'Thank you for registering with Main Website Store'
    }


}
const createact = new createaccount()
export default createact
