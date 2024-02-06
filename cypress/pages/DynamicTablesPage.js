const BasePage = require("./BasePage.js")

class DynamicTablesPage extends BasePage {

    // Locators 
    getHeading() {
        return cy.get('.is-size-3')
    }

    getTableHeaders() {
        return cy.get('.header')
    }

    getTableData() {
        return cy.get('td')
    }

    getProductBtn() {
        return cy.get('#add_product_btn')
    }

    getTotalTxt() {
        return cy.get('#total_amount')
    }

    getModalHeading() {
        return cy.get('#modal_title')
    }

    getXbtn() {
        return cy.get('.delete')
    }

    getPlzSelctQuanLabel() {
        return cy.get(':nth-child(1) > label')
    }

    getPlzEntrProductName() {
        return cy.get(':nth-child(2) > label')
    }

    getPlzEntrPriceLabel() {
        return cy.get(':nth-child(3) > label')
    }

    getQuantityInput() {
        return cy.get('#quantity')
    }

    getProductInput() {
        return cy.get('#product')
    }

    getPriceInput() {
        return cy.get('#price')
    }

    getSubmitBtn() {
        return cy.get('#submit')
    }

    getNewProduct() {
        return cy.get('tbody > tr').last().children()
    }

    // methods

    getBtn(text) {
        switch(text) {
            case 'ADD PRODUCT':  
                return this.getProductBtn()
            
        case 'X':
            return this.getXbtn()
        
        case 'SUBMIT':
            return this.getSubmitBtn()
        default: 
            throw new Error(`${text} input box not found`)
        }
    }

    getLabels(text) {
        switch(text) { 
            case 'Please select the quantity':
                return this.getPlzSelctQuanLabel()
            case 'Please enter the name of the product': 
                return this.getPlzEntrProductName()
            case 'Please enter the price of the product': 
                return this.getPlzEntrPriceLabel()
            default: 
                throw new Error(`${text} input box not found`)
        }
    }

    getInput(text) {
        switch(text) {
            case 'Quantity':
                return this.getQuantityInput()
            case 'Price': 
                return this.getPriceInput()
            case 'Product': 
                return this.getProductInput()
            default: 
                throw new Error(`${text} input box not found`)
        }
     } 
}

module.exports = DynamicTablesPage
