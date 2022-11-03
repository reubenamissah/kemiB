import {login} from "../fixtures/selectors.js";
 
describe("Given I am on the login page", function () {
    beforeEach(function () {
        cy.visit('/')
 
    });
 
    it("LOGIN - I Should be able to sign in my account with valid email and password", function () {
      cy.get(':nth-child(1) > .el-form-item__content > .el-input > .el-input__inner').type('Oniije')
      cy.get(':nth-child(2) > .el-form-item__content > .el-input > .el-input__inner').type('Johnmyles07*')
      cy.get('.el-button').click()
      cy.wait(70000)
      cy.xpath("//input[@class='el-input__inner']").type('123456')
      cy.get('.el-button').click()
      
      
    })
 
 
})