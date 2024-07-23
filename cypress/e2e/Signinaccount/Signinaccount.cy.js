import signin from "../../Pageobject/Signaccount/Signinaccount"
import data from "../../fixtures/Signinaccountdata/signinaccountdata.json"
describe("Verifying login functionality", () => {
    it("Verifying user can able to login", () => {
        cy.visit("customer/account/create/")
        cy.contains(signin.signinbutton()).eq(0).click()
        cy.get(signin.Emailidinput()).type(data.Emailid)
        cy.get(signin.passwordinput()).type(data.password)
        cy.get(signin.submitbutton()).eq(0).click()
        cy.get(signin.assert()).should("be.visible")
    })
})