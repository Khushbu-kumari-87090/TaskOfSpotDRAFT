//task4/ cypress/integration/remove_from_my_books.spec.js

describe('Remove Book from "My Books" List', () => {
  it('should remove a selected book from "My Books" list', () => {
    // Assuming you are already logged in and the book is added to "My Books" list.
    // If not, you should add a login step and add the book to "My Books" list first.

    cy.visit('https://www.goodreads.com/user/show/your_user_id');

    // Replace 'your_user_id' with your actual Goodreads user ID.
    // You can find your user ID in the URL when you navigate to your profile.

    // Wait for "My Books" page to load
    cy.url().should('include', '/shelf/show/your_user_id');
    cy.contains('My Books').should('be.visible');

    // Click on the "edit" link of the book to remove it
    const bookTitleToRemove = 'The Great Gatsby';
    cy.contains(bookTitleToRemove)
      .parents('.elementList')
      .find('.wtrShelfButton')
      .click();

    // Confirm the removal from "My Books" list
    cy.get('#owned_modal')
      .should('be.visible')
      .contains('Remove from My Books')
      .click();

    // Verify that the book is removed from "My Books" list
    cy.contains(bookTitleToRemove).should('not.exist');
  });
});
