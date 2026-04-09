describe("actions lesson", ()=>{
    it("Click command",()=>{
        cy.visit("http://127.0.0.1:5500/cypress/e2e/html-files/actionsLesson.html")
        cy.get("#btn1").click()
        cy.get("#btn2").click("top")
        cy.get(".btn").click({multiple:true})
        cy.get("#btn0").click({force:true})
    })
    it('type command', () => {
      cy.visit("http://127.0.0.1:5500/cypress/e2e/html-files/actionsLesson.html")
      cy.get("[placeholder='Type your name']").type("Sally")
      cy.get("#myTextField").type("{pageDown}")
        
    });
    
    it("select option", () => {
        cy.visit("http://127.0.0.1:5500/cypress/e2e/html-files/actionsLesson.html")
        cy.get("#country").select("Jordan") // select by text
        cy.get("#country").select("egypt_country") // select by value
        cy.get("#country").select("0") //select by index
    })
})