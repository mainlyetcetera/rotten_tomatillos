describe('test', () => {
  it('should exist', () => {
    expect(true).to.equal(true);
  });

  it('should be able to find the site', () => {
    cy.visit('localhost:3000');
  });
});


