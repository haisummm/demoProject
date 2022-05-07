import dresses from '../../Pages/dressespage.js'
import home from '../../Pages/homepage.js'
import receipts from '../../Pages/receiptpage.js'
const homePage= new home()
const dressPage= new dresses()
const receiptPage= new receipts()
let nameText
let checkboxValue
let priceBefore
let priceAfter

describe('automation task', () => {
    before(() => {
        let url = Cypress.config().baseUrl
        cy.visit(url)
    })
it ('should verify search functionality',() =>{
    cy.fixture('example').then(function (data) {
        this.data = data
        homePage.searchField().type(this.data.name)
       cy.log('Verify the name entered is equal to the name expected')
        homePage.searchField().invoke('val').then((val)=>{
            nameText= val
            expect(nameText).to.be.eq(this.data.name)
        homePage.searchBtn().click()
       cy.log('verify name in URL')
        cy.url().should('include', 'haisum') 
        cy.log('verify alert message')
        homePage.alert().should('contain.html','No results were found for your search&nbsp;"haisum"')
        })

})
})
it('should verify number of length of dresses',() =>{
    cy.fixture('example').then(function (data) {
        this.data = data
        homePage.dressesTab().should('be.visible')
        homePage.dressesTab().click()
        cy.log('Verify url after clicking dresses tab')
        cy.url().should('include', 'controller=category') 
        cy.log('Verify url after selecting Small Size Checkbox')
        dressPage.smallCheckbox().click()
        cy.url().should('include', 'size-s') 
        cy.log('verify if the count on checkbox is equal to number of items on page')
        dressPage.smallSizeCount().invoke('text').then((text)=>{
            checkboxValue= text
           const str = checkboxValue
           const newVal= str.replace(/[\])}[{(]/g, '');
        console.log(newVal,"value")
        dressPage.productList().children().should('have.length', newVal)
})  
})
})
it('Verify add to cart',() =>{
    cy.fixture('example').then(function (data) {
        this.data = data

        dressPage.firstItem().trigger('mouseover')
        dressPage.more().first().click({force:true})
        receiptPage.displayPrice().invoke('text').then((text) =>{
        priceBefore= text
        console.log(priceBefore,"price before")
        receiptPage.addToCart().click()
        receiptPage.finalPrice().should('be.visible').invoke('text').then((text) =>{
            priceAfter=text
        expect(priceAfter).to.eq(priceBefore) 
        receiptPage.popupMessage().should('contain.html', this.data.popupMessage)
        })           
        })
    })

    
})


})


