import { defineConfig } from 'cypress'


export default defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    specPattern: './cypress/**/*.spec.(ts|js)',
    supportFile: './cypress/support/e2e.ts'
  },
})