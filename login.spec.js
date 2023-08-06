// task1/integration/login.spec.js

describe('Goodreads Login', () => {
    it('should log in with valid credentials', () => {
      cy.visit('https://www.goodreads.com/user/sign_in');
  
      // Fill in the login form
      cy.get('#user_email').type('your_email@example.com');
      cy.get('#user_password').type('your_password');
  
      // Submit the form
      cy.get('[name="next"]').click();
  
      // Check if the login is successful
      cy.url().should('eq', 'https://www.goodreads.com/');
      cy.contains('My Books').should('be.visible');
      cy.contains('Logout').should('be.visible');
    });
  
    it('should show an error message with invalid credentials', () => {
      cy.visit('https://www.goodreads.com/user/sign_in');
  
      // Fill in the login form with incorrect credentials
      cy.get('#user_email').type('wrong_email@example.com');
      cy.get('#user_password').type('wrong_password');
  
      // Submit the form
      cy.get('[name="next"]').click();
  
      // Check if the error message is displayed
      cy.contains('Sorry, that email or password isn\'t right.').should('be.visible');
    });
  });
  