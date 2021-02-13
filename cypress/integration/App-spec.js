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
      .fixture('../fixtures/indivMovies.json')
      .then(data => {
        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', {
          statusCode: 200, 
          body: data
        })
      })
    cy
      .fixture('../fixtures/indivMovies.json')
      .then(data => {
        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/337401', {
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
      .contains('Rancid Tomatillos');
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
      .should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg')
  });

  it('should render the correct title of a movie', () => {
    cy
      .get('section')
      .children('article:first')
      .find('h2')
      .contains('Money Plane')
  });

  it('should navigate upon clicking a title', () => {
    cy
    .get('section')
    .children('article:first')
    .find('h2')
    .click()

    cy
    .get('div section')
    .find('h2')
    .contains('Money Plane')
  });
  
  it('should be able to return to main view from the link', () => {
    cy
      .get('div section a')
      .click()
  });

  it('should wait a sec', () => {
    cy.wait(1000);
  });

  it('should navigate upon clicking a movie', () => {
    cy
    .get('section')
    .children('article:first')
    .find('img')
    .click()

    cy
    .get('div img')
    // .find('img')
    .should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg')
  });
});

// thinking we may need describe blocks for each set of errors
// best way to reset intercepts

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
