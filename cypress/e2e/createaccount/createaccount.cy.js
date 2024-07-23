import createaccount from "../../Pageobject/createuser/Createuser"
import data from "../../fixtures/CreateUser/Createuser.json"
import data1 from "../../fixtures/Signinaccountdata/signinaccountdata.json"
import signin from "../../Pageobject/Signaccount/Signinaccount"
describe("Verifying user able to create", () => {
    it("Verifying user able to create functionality", () => {
        cy.visit("customer/account/create/")
        cy.contains(createaccount.createacuntbutton()).eq(0).click()
        cy.get(createaccount.firstnameinput()).type(data.Firstname)
        cy.get(createaccount.lastnameinput()).type(data.Lastname)
        cy.get(createaccount.Emailidinput()).type(data.Emailid)
        cy.get(createaccount.passwordinput()).type(data.Password)
        cy.get(createaccount.confirmpasswordinput()).type(data.Confirmpassword)
        cy.get(createaccount.submitbutton()).click()
        // cy.contains('Thank you for registering with Main Website Store').should("be.visible")
    })
    it("Verifying user can able to login", () => {
        cy.visit("customer/account/create/")
        cy.contains(signin.signinbutton()).eq(0).click()
        cy.get(signin.Emailidinput()).type(data1.Emailid)
        cy.get(signin.passwordinput()).type(data1.password)
        cy.get(signin.submitbutton()).eq(0).click()
        cy.get(signin.assert()).should("be.visible")
    })
})