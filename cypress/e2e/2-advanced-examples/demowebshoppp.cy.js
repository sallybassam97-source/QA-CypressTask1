describe("check that all fields / titles / buttons are visible", ()=>{
    it("check that all fields are visible", ()=>{
        cy.visit("https://demowebshop.tricentis.com/register")
        cy.get("#FirstName").should("be.visible")
        cy.get("#LastName").should("be.visible")
        cy.get("#Email").should("be.visible")
        cy.get("#Password").should("be.visible")
        cy.get("#ConfirmPassword").should("be.visible")
        cy.get(".page-title").contains("Register").should("be.visible")
        cy.get(".title").contains("Personal").should("be.visible")
        cy.get(".inputs").contains("Gender").should("be.visible")

    })
    

})

describe("check the functionality of creating a new account", ()=>{
    it("check the functionality of creating a new account", ()=>{
        const uniqueSeed = Date.now();
        const dynamicEmail = `user_${uniqueSeed}@test.com`;
        cy.visit("https://demowebshop.tricentis.com/register")
        cy.get("#gender-female").check()
        cy.get("#FirstName").type("Sally")
        cy.get("#LastName").type("Shqeir")
        cy.get("#Email").type(dynamicEmail)
        cy.get("#Password").type("123Sally#")
        cy.get("#ConfirmPassword").type("123Sally#")
        cy.get("#register-button").click()
        cy.get(".result").should("contain", "Your registration completed")

        
    })
})