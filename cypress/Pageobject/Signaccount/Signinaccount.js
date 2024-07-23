class signbutton {

    signinbutton () {
    
        return "Sign In"
    }

    Emailidinput () {

        return 'input[title="Email"]'
    }
    passwordinput () {

        return 'input[title="Password"]'
    }
    submitbutton (){

        return '#send2'
    }
    assert(){

        return 'a[aria-label="store logo"]'
    }
}

const signin = new signbutton ()
export default signin








































