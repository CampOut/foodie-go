import React from 'react'
import DeliveryOptions from './DeliveryOptions'

describe('<DeliveryOptions />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<DeliveryOptions />)
  })
})