//task3/integration/mark_as_want_to_read.spec.js

describe('Mark Book as "Want to Read"', () => {
    it('should mark a book as "Want to Read"', () => {
      cy.visit('https://www.goodreads.com/');
  
      // Search for a specific book title
      const bookTitle = 'The Great Gatsby';
      cy.get('#sitesearch_field').type(bookTitle);
      cy.get('.searchBox > form > .searchBox__buttonContainer').click();
  
      // Wait for the search results to load
      cy.contains('Search results for').should('contain', bookTitle);
  
      // Click on the book from the search results
      cy.contains(bookTitle).click();
  
      // Wait for the book page to load
      cy.url().should('include', '/book/show/');
      cy.contains(bookTitle).should('be.visible');
  
      // Click on the "Want to Read" button
      cy.get('[data-reactid=".11.2.0.1.0.2"]').contains('Want to Read').click();
  
      // Validate that the book is marked as "Want to Read"
      cy.get('[data-reactid=".11.2.0.0.0.0"]').should('contain', 'Want to Read');
    });
  });
  