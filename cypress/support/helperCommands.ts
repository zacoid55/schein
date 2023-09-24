/// <reference types="cypress" />
import cypressIds from '../support/cypress_ids.json';

export function loginWith(username: string, password: string) {
    cy.get(`[id^=${cypressIds.textFields.username}]`).first().clear().type(username);
    cy.get(`[id^=${cypressIds.textFields.password}]`).first().clear().type(password);

    cy.get(`[id^=${cypressIds.buttons.login}]`).click();
}