describe('another test', () => {
  it('should still be able to find the site', () => {
    cy.visit('localhost:3000');
    expect(true).to.equal(true);
  });
});
