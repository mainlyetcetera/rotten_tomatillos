describe('the main user flow', () => {
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
      .fixture('../fixtures/indivMovies.json')
      .then(data => {
        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', {
          statusCode: 200, 
          body: data.indivMovie[0]
        })
      })

    cy
      .get('section')
      .children('article:first')
      .find('h2')
      .click()

    cy
      .get('div section')
      .find('h2')
      .contains('Money Plane')

    cy
      .wait(3000)
  });
  
  it('should be able to return to main view from the link', () => {
    cy
      .get('div section a')
      .click()
  });

  it('should navigate upon clicking a movie poster', () => {
    cy
      .fixture('../fixtures/indivMovies.json')
      .then(data => {
        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/337401', {
          statusCode: 200, 
          body: data.indivMovie[1]
        })
      })
    cy
      .get('section')
      .children('article:nth-child(2)')
      .find('img')
      .click()

    cy
      .get('div img')
      .should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg')
  });
});

describe('the error on the main view', () => { 
  it('navigate to a bad api', () => {
    cy
      .fixture('../fixtures/allMovies.json')
      .then(data => {
        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
          statusCode: 400
        })
      })
    cy
      .visit('localhost:3000');
  });

  it('should render error messages', () => {
    cy
      .get('div')
      .find('h2')
      .contains('Sorry, something went wrong!')
    cy
      .get('div')
      .find('h3')
      .contains('Please try again later!')
  });
});

describe('the error on the individual view', () => {
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
      .visit('http://localhost:3000')
  });

  it('should navigate upon clicking a title', () => {
    cy
      .fixture('../fixtures/indivMovies.json')
      .then(data => {
        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/718444', {
          statusCode: 401
        })
      })

    cy
    .get('section')
    .children('article:nth-child(3)')
    .find('h2')
    .click()

    cy
      .get('div')
      .find('h2')
      .contains('Sorry, something went wrong!')

    cy
      .get('div')
      .find('h3')
      .contains('Please try again later!')
  });

  it('should render error messages', () => {
    cy
      .get('div')
      .find('h2')
      .contains('Sorry, something went wrong!')

    cy
      .get('div')
      .find('h3')
      .contains('Please try again later!')
  });

  it('should take time to show the error message', () => {
    cy.wait(2000)
  });

  it('should return to main view even after an error upon link click', () => {
    cy
      .get('div a')
      .click()

    cy
      .get('section')
      .children('article:nth-child(3)')
      .find('h2')
      .contains('Rogue')

    cy
      .get('section')
      .children('article:nth-child(3)')
      .find('img')
      .should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//uOw5JD8IlD546feZ6oxbIjvN66P.jpg')
  });
});

describe('going straight to a single-movie view', () => { 
  it('should be able to navigate straight to a single-movie', () => {
    cy
      .fixture('../fixtures/indivMovies.json')
      .then(data => {
        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/337401', {
          statusCode: 200, 
          body: data.indivMovie[1]
        })
      })

    cy
      .fixture('../fixtures/allMovies.json')
      .then(data => {
        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
          statusCode: 200, 
          body: data
        })
      })

    cy
      .visit('http://localhost:3000/Mulan/337401')

    cy
      .get('div img')
      .should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg')
  });

  it('should visibly stop on details page before returning', () => {
    cy.wait(1000)
  });

  it('should be able to click the link back to the main view', () => {
    cy
      .get('div a')
      .click()

    cy
      .get('section')
      .children('article:nth-child(2)')
      .find('h2')
      .contains('Mulan')

    cy
      .get('section')
      .children('article:nth-child(2)')
      .find('img')
      .should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg')
  });
});
