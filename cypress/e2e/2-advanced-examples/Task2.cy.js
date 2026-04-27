

describe ("sign up " , () =>{
    it("Validate that a new user can successfully register using the Signup page" , ()=>{
        const uniqueSeed = Date.now();
        const dynamicEmail = `user_${uniqueSeed}@test.com`;
        cy.visit("https://automationexercise.com/")
        cy.get('a[href="/login"]').click()
        cy.get("[data-qa=signup-name]").type("Sally97")
        cy.get("[data-qa=signup-email]").type(dynamicEmail)
        cy.get("[data-qa=signup-button]").click()
        cy.contains("Enter Account Information").should("be.visible")
        cy.url().should("include", "/signup")
        cy.get("#id_gender2").check()
        cy.get("#password").type("123997")
        cy.get("#days").select("12")
        cy.get("#months").select("March")
        cy.get("#years").select("1997")
        cy.get("#first_name").type("Sally")
        cy.get("#last_name").type("Test")
        cy.get("#company").type("QAround6")
        cy.get("#address1").type("742 Maplewood Avenue, Toront")
        cy.get("#address2").type("1898 Rue Saint-Denis")
        cy.get("#country").select("Canada")
        cy.get("#state").type("Ontario")
        cy.get("#city").type("Toronto")
        cy.get("#zipcode").type("M4C 1A7")
        cy.get("#mobile_number").type("+536498752")
        cy.get("[data-qa=create-account]").click()
        cy.get("[data-qa=account-created]").should("be.visible")
        cy.url().should("include", "/account_created")
        cy.get("[data-qa=continue-button]").click()
        cy.get('a[href="/logout"]').should("be.visible")

    })
})

describe("user login", () => {
    it("validate that the user can log in using valid credentials", () => {
        cy.visit("https://automationexercise.com/")
        cy.get('a[href="/login"]').click()
        cy.get("[data-qa=login-email]").type("sallybassam97@gmail.com")
        cy.get("[data-qa=login-password]").type("sally123997")
        cy.get("[data-qa=login-button]").click()
        cy.get('a[href="/logout"]').should("be.visible")

    })
    })

describe("Search for a Product",()=>{
      beforeEach(() => {
        cy.visit("https://automationexercise.com/")
        cy.get('a[href="/login"]').click()
        cy.get("[data-qa=login-email]").type("sallybassam97@gmail.com")
        cy.get("[data-qa=login-password]").type("sally123997")
        cy.get("[data-qa=login-button]").click()
    })
    it("Validate that the correct results appear when using search bar", () => {
        cy.get('a[href="/products"]').click()
        cy.get("#search_product").type("Blue Top")
        cy.get("#submit_search").click()
        cy.get(".product-image-wrapper").should("be.visible")
        cy.url().should("include", "products?search=Blue%20Top")

    })

    it("Validate that a user can add a product to the shopping cart",()=>{
        cy.get('a[href="/products"]').click()
        cy.get('a[data-product-id="1"]').first().click()
        cy.contains("Added!").should("be.visible")
        cy.get(".modal-body").children().find("a").click()
        cy.get('a[href="/product_details/1"]').contains("Blue Top").should("be.visible")
    })

    it.only("Validate that a logged-in user can add a review to a product",()=>{
         cy.get('a[href="/products"]').click()
        cy.get('a[href="/product_details/2"]').click()
        cy.get("#name").type("Sally")
        cy.get("#email").type("sallybassam97@gmail.com")
        cy.get("#review").type("Good quality")
        cy.get("#button-review").click()
        cy.contains("Thank you for your review.").should("be.visible")
    })


})
