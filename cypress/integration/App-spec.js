describe('the movies view', () => {
  it('should visit the page with test data', () => {
    cy
      .fixture('../fixtures/allMovies.json')
      .then(data => {
        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
          statusCode: 200, 
          body: data
        })
      })
    cy
      .visit('localhost:3000');
  });

  it('should render a header', () => {
    cy
      .get('header')
      .contains('Rotten Tomatillos');
  });

  it('should render movies', () => {
    cy
      .get('section')
      .children()
      .should('have.length', 3)
  });

  it('should render the correct poster of a movie', () => {
    cy
      .get('section')
      .children('article:first')
      .find('img')
      .should('have.attr', 'src', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies')
  });

  it('should be able to fetch movies', () => {

  });

  it('should render an error message if the fetch fails', () => {

  });
});

describe('the single movie view', () => { 
  it('should render a single movie from the url', () => {
    // cy.visit a single page here

  });

  it('should be able to fetch a single movie', () => {

  });

  it('should render an error message if the fetch fails', () => {

  });

  it('should render all details if all details are in the data', () => {

  });

  it('should not render details that are not present in the data', () => {

  });
});
