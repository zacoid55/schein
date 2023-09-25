/// <reference types="cypress" />
import 'cypress-each';
import routes from '../support/routes.json';
import cypressIDs from '../support/cypress_ids.json';
import testStrings from '../support/strings.json';

import { ValidLogins } from '../support/logins';
import { loginWith, enterDetails } from 'cypress/support/helperCommands';

const validUsername = ValidLogins.VALID_USERNAME_AND_PASSWORD.username
const validPassword = ValidLogins.VALID_USERNAME_AND_PASSWORD.password

describe('Login and successfully purhcase items', () => {

    it('allows me to successully login, add items to my cart and checkout', () => {
        cy.visit('');
        loginWith(validUsername, validPassword)
        cy.url().should('contain', routes.inventory);

        cy.get(`[id^=${cypressIDs.buttons.addBackpackToCart}]`).click();
        cy.get(`[id^=${cypressIDs.buttons.addBikeLightToCart}]`).click();
        cy.get(`[id^=${cypressIDs.buttons.addOnesieToCart}]`).click();

        cy.get(`[id^=${cypressIDs.links.shoppingCart}]`).contains('3');

        cy.get(`[id^=${cypressIDs.links.shoppingCart}]`).click();
        cy.get(`[id^=${cypressIDs.buttons.checkout}]`).click();

        enterDetails(testStrings.names.firstName, testStrings.names.secondName,
            testStrings.postCodes.postCode)

        cy.get(`[id^=${cypressIDs.buttons.contine}]`).click();
        cy.get(`[id^=${cypressIDs.buttons.finish}]`).click();

        cy.get(`[id^=${cypressIDs.containers.checkoutComplete}]`).contains(testStrings.expected.chekoutComplete);
    })
});