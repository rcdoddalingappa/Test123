import createaccount from "../../Pageobject/createuser/Createuser"
import data from "../../fixtures/Usercreate/Usercreatedata.json"
describe("Verifying user able to create", () => {
    it("Verifying user able to create functionality", () => {
        cy.visit("customer/account/create/")
        cy.contains(createaccount.createacuntbutton()).eq(0).click()

       const  ran = (Math.random() + 1).toString(36).substring(7);
       
        cy.get(createaccount.firstnameinput()).type(data.Firstname + ran)
        cy.get(createaccount.lastnameinput()).type(data.Lastname + ran)
        cy.get(createaccount.Emailidinput()).type(data.Emailid)
        cy.get(createaccount.passwordinput()).type(data.Password)
        cy.get(createaccount.confirmpasswordinput()).type(data.Confirmpassword)
        cy.get(createaccount.submitbutton()).click()
        cy.contains('Thank you for registering with Main Website Store').should("be.visible")


    })
})