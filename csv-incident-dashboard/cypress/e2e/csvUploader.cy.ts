describe('CSV Uploader', () => {
	it('should upload a CSV file and display success message', () => {
		cy.visit('http://localhost:3000'); // Adjust the URL as needed
		cy.get('input[type="file"]').attachFile('sample.csv'); // Adjust the selector as needed
		cy.get('button[type="submit"]').click(); // Adjust the selector as needed
		cy.contains('Upload successful').should('be.visible'); // Adjust the message as needed
	});
});