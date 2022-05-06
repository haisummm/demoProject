import commonSelectors from '../../support/commonSelectors.js'
const selectors = new commonSelectors()
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
        selectors.searchField().type(this.data.name)
       cy.log('Verify the name entered is equal to the name expected')
        selectors.searchField().invoke('val').then((val)=>{
            nameText= val
            expect(nameText).to.be.eq(this.data.name)
        selectors.searchBtn().click()
       cy.log('verify name in URL')
        cy.url().should('include', 'haisum') 
        cy.log('verify alert message')
        selectors.alert().should('contain.html','No results were found for your search&nbsp;"haisum"')
        })

})
})
it('should verify number of length of dresses',() =>{
    cy.fixture('example').then(function (data) {
        this.data = data
        selectors.dressesTab().should('be.visible')
        selectors.dressesTab().click()
        cy.log('Verify url after clicking dresses tab')
        cy.url().should('include', 'controller=category') 
        cy.log('Verify url after selecting Small Size Checkbox')
        selectors.smallCheckbox().click()
        cy.url().should('include', 'size-s') 
        cy.log('verify if the count on checkbox is equal to number of items on page')
        selectors.smallSizeCount().invoke('text').then((text)=>{
            checkboxValue= text
           const str = checkboxValue
           const newVal= str.replace(/[\])}[{(]/g, '');
        console.log(newVal,"value")
        selectors.productList().children().should('have.length', newVal)
})  
})
})
it('Verify add to cart',() =>{
    cy.fixture('example').then(function (data) {
        this.data = data

        selectors.firstItem().trigger('mouseover')
        selectors.more().first().click({force:true})
        selectors.displayPrice().invoke('text').then((text) =>{
        priceBefore= text
        console.log(priceBefore,"price before")
        selectors.addToCart().click()
        selectors.finalPrice().should('be.visible').invoke('text').then((text) =>{
            priceAfter=text
        expect(priceAfter).to.eq(priceBefore) 
        selectors.popupMessage().should('contain.html', this.data.popupMessage)
        })           
        })
    })

    
})


})


