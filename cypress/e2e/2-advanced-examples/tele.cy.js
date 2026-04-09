describe("find demo text", ()=>{
  it("should find demo", ()=>{
    cy.visit("https://www.telerik.com/support/demos")
    // cy.contains('h1', 'Demos')
    cy.get(".NavAlt-anchor").eq(3)
    cy.get("[title=Search]")
    cy.get("#mobile")
    cy.get("[alt=Google-play-icon]")
    cy.get(".TK-Footer-List-Social").first().children()
    cy.contains("FAQs")

    dsb
  })
})
