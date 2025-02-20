describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })
  it('displays the main page', () => {
   cy.getByData('logo').should('be.visible')
  })
  it('shows the page header', () => {
    cy.getByData('top-nav').should('be.visible')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.right-option').click();
    cy.get('.left-option').click();
    cy.get('.icon-shopping-cart-icon').should('be.visible')
    cy.getByData('address').should('be.visible')
    cy.getByData('signin-btn').should('be.visible')
    cy.getByData('signup-btn').should('be.visible')    /* ==== End Cypress Studio ==== */
  })
  it('shows an empty shopping cart when the cart is clicked on', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.icon-shopping-cart-icon').click();
    cy.get('h5').should('be.visible')
    cy.get('.modal-footer > .primary-btn').click();
    cy.get('h5').should('not.exist')
    /* ==== End Cypress Studio ==== */
  })
})