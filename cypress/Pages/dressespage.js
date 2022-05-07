
class dresses {

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

price(){
    return cy.get('.price')
}
more(){
    return cy.get('.lnk_view')
}
}
export default dresses