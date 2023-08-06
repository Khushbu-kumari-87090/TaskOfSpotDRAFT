// task2/integration/search.spec.js

describe('Goodreads Book Search', () => {
    it('should search for a specific book title', () => {
      cy.visit('https://www.goodreads.com/');
  
      // Search for a specific book title
      const bookTitle = 'The Great Gatsby';
      cy.get('#sitesearch_field').type(bookTitle);
      cy.get('.searchBox > form > .searchBox__buttonContainer').click();
  
      // Check if the search results page is displayed
      cy.url().should('include', '/search');
      cy.contains('Search results for').should('contain', bookTitle);
  
      // Validate that the book title is present in the search results
      cy.contains(bookTitle).should('be.visible');
    });
  });
  