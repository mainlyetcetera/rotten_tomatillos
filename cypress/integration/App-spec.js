describe('the main poster view', () => {
  beforeEach(() => {
    cy.visit('localhost:3000');
  });

  it('should render a header', () => {
    cy
      .get('header')
      .contains('Rotten Tomatillos');
  });

  it('should render movies', () => {
    // check class name?
    // check how many there are?
    // check that there are multiple articles
    cy.get('section')
  });


  it('should be able to fetch movies', () => {

  });


  it('should render an error message if the fetch fails', () => {

  });
});

describe('the single movie view'), () => { 
  it('should render a single movie from the url', () => {
    // cy.visit a single page here

  });

  it('should be able to fetch a single movie', () => {

  });
});
