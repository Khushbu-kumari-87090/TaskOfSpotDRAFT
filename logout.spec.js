//task5/ cypress/integration/logout.spec.js

describe('Logout from Goodreads', () => {
    it('should log out from the Goodreads website', () => {
      // Assuming you are already logged in.
      // If not, you should add a login step before the logout step.
  
      cy.visit('https://www.goodreads.com/');
  
      // Click on the profile menu to show the logout option
      cy.get('.siteHeader__personalizedNavTrigger').click();
  
      // Click on the "Log out" option from the dropdown
      cy.contains('Log out').click();
  
      // Confirm the logout action
      cy.get('#log_out_modal')
        .should('be.visible')
        .contains('Log Out')
        .click();
  
      // Verify that the user is logged out and redirected to the homepage
      cy.url().should('eq', 'https://www.goodreads.com/');
      cy.contains('Sign in').should('be.visible');
    });
  });
  