class home {

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
}

export default home