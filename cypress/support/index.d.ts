/// <reference types="cypress" />

declare module 'cypress-webpack.config.js'

declare namespace Cypress {
    interface Chainable {
        clearAndTypeInput(element: string, text: string): Chainable<Element>;
    }
}