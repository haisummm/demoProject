class commonSelectors {
searchField(){
    return cy.get('#search_query_top')
}
searchBtn(){
    return cy.get('#searchbox > .btn')
}
alert(){
    return cy.get('.alert')

}
dressesTab(){
    return cy.get('.sf-menu > :nth-child(2) > .sf-with-ul')
}
smallCheckbox(){
    return cy.get('#layered_id_attribute_group_1')
}
smallSizeCount(){
    return cy.get('#ul_layered_id_attribute_group_1 > :nth-child(1) > label > a > span')
}
productList(){
    return cy.get('.product_list')
}
firstItem(){
    return cy.get('.product_list > :nth-child(1)')
}
addToCart(){
    return cy.get('.exclusive > span')
}
price(){
    return cy.get('.price')
}
more(){
    return cy.get('.lnk_view')
}
displayPrice(){
    return cy.get('#our_price_display')
}
finalPrice(){
    return cy.get('#layer_cart_product_price')
}
popupMessage(){
    return cy.get('.layer_cart_product > h2')
}


}
    export default commonSelectors