describe('the main poster view', () => {
  beforeEach(() => {
    cy.visit('localhost:3000');
  });

  it('should render a header', () => {
    cy
      .get('header')
      .contains('Rotten Tomatillos');
  });

  it('should load placeholders', () => {
    // can we test the loading placeholders?
    // try to make fetch wait
    // check that placeholders exist
    // then let fetch finish
    // .wait(500)
    cy
      .fixture('testData.json')
      .then(data => {
        .intercept('GET', 'http://localhost:3000/', {
          statusCode: 200, 
          body: { placeholder }
        })
      })
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
