describe("check login functionality",()=>{
    it("valid that the user can login using valid email and valid password",()=>{
        cy.visit("/")
        cy.get("#user-name").type("standard_user")
        cy.get("#password").type("secret_sauce")
        cy.get("[name=login-button]").click()

        cy.get("#react-burger-menu-btn").click()
        cy.get(".menu-item").first()
        cy.get(".pricebar").first().find("button").click()
    })

    it("valid that the user cannot login using invalid email and invalid password",()=>{
        cy.visit("/")

        //test
    })
})
