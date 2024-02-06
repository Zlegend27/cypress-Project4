const { Given, Then, When} = require("@badeball/cypress-cucumber-preprocessor")
const DynamicTablesPage = require("../../pages/DynamicTablesPage")

const dynamicTablesPage = new DynamicTablesPage()



Given("the user is on {string}", (url) => {
    cy.visit(url)
})

Then(/^the user should see the "([^"]*)" heading$/, (heading) => {
	dynamicTablesPage.getHeading().should('have.text', heading)
});

Then(/^the user should see the table with the headers below$/, (dataTable) => {
	const arr = dataTable.rawTable.flat()

	dynamicTablesPage.getTableHeaders().each(($el, index) => {
		cy.wrap($el).should('have.text', arr[index])
	})
}) 

Then(/^the user should see the table with the rows below$/, (dataTable) => {
	const arr = dataTable.rawTable.flat()

	dynamicTablesPage.getTableData().each(($el, index) => {
		cy.wrap($el).should('have.text', arr[index])
	})
});

Then(/^the user should see the "([^"]*)" button is enabled$/, (text) => {
	dynamicTablesPage.getBtn(text).should('be.enabled')
});

Then(/^the user should see the "([^"]*)" text displayed$/, (text) => {
	dynamicTablesPage.getTotalTxt().should('have.text', text)
});





When(/^the user clicks on the "([^"]*)" button$/, (text) => {
	dynamicTablesPage.getBtn(text).click()
});


Then(/^the user should see the "([^"]*)" modal with its heading$/, (text) => {
	dynamicTablesPage.getModalHeading().should('have.text', text)
});


Then(/^the user should see the "([^"]*)" label$/, (text) => {
	dynamicTablesPage.getLabels(text).should('have.text', text)
});


Then(/^the user should see the "([^"]*)" input box is enabled$/, (text) => {
	dynamicTablesPage.getInput(text).should('be.enabled')
});


Then(/^the user should not see the "([^"]*)" modal$/, () => {
	dynamicTablesPage.getModalHeading().should('not.exist')
});


Then(/^the user enters the quantity as "([^"]*)"$/, (quan) => {
	dynamicTablesPage.getQuantityInput().type(quan)
});


Then(/^the user enters the product as "([^"]*)"$/, (product) => {
	dynamicTablesPage.getProductInput().type(product)
});


Then(/^the user enters the price as "([^"]*)"$/, (price) => {
	dynamicTablesPage.getPriceInput().type(price)
});


Then(/^the user should see the table with the new row below$/, (dataTable) => {
	const arr = dataTable.rawTable.flat()

	dynamicTablesPage.getNewProduct().each(($el, index) => {
		cy.wrap($el).should('have.text', arr[index])
	})
});



















