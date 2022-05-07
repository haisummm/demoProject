class receipts {


    displayPrice(){
        return cy.get('#our_price_display')
    }
    finalPrice(){
        return cy.get('#layer_cart_product_price')
    }
    popupMessage(){
        return cy.get('.layer_cart_product > h2')
    }
    addToCart(){
        return cy.get('.exclusive > span')
    }


}
export default receipts