describe('login scene specs', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('"user" input should get the focus when clicking on it', () => {
    // Arrange

    // Act
    cy.findByRole('textbox').as('userInput');
    cy.get('@userInput').click();

    // Assert
    cy.get('@userInput').should('have.focus');
  });

  it('"password" input should get the focus when clicking on it', () => {
    // Arrange

    // Act
    cy.get('input[name="password"]').as('passwordInput');
    cy.get('@passwordInput').click();

    // Assert
    cy.get('@passwordInput').should('have.focus');
  });

  it('if "user" input is empty, it should show error message when blur after clicking on it', () => {
    // Arrange
    const errorMsg = 'Debe informar el campo';

    // Act
    cy.findByRole('textbox').as('userInput');
    cy.get('@userInput').click();
    cy.get('@userInput').blur();

    // Assert
    cy.get(
      'p[class="MuiFormHelperText-root MuiFormHelperText-contained Mui-error"]'
    ).should('have.text', errorMsg);
  });

  it('if "password" input is empty, it should show error message when blur after clicking on it', () => {
    // Arrange
    const errorMsg = 'Debe informar el campo';

    // Act
    cy.get('input[name="password"]').as('passwordInput');
    cy.get('@passwordInput').click();
    cy.get('@passwordInput').blur();

    // Assert
    cy.get(
      'p[class="MuiFormHelperText-root MuiFormHelperText-contained Mui-error"]'
    ).should('have.text', errorMsg);
  });

  it('should show alert when clicking on "login" button with wrong values in the inputs', () => {
    // Arrange
    const userWrongValue = 'John';
    const passwordWrongValue = '12345';

    // Act
    cy.findByRole('textbox').as('userInput');
    cy.get('input[name="password"]').as('passwordInput');
    cy.findByRole('button').as('loginBtn');
    cy.get('@userInput').type(userWrongValue);
    cy.get('@passwordInput').type(passwordWrongValue);
    cy.get('@loginBtn').click();

    // Assert
    cy.findByRole('alert').should('be.visible');
  });

  it('should navigate to "submodule-list" after clicking "login" button with correct values in both inputs', () => {
    // Arrange
    const user = 'admin';
    const password = 'test';

    // Act
    cy.findByRole('textbox').as('userInput');
    cy.get('input[name="password"]').as('passwordInput');
    cy.findByRole('button').as('loginBtn');
    cy.get('@userInput').type(user);
    cy.get('@passwordInput').type(password);
    cy.get('@loginBtn').click();

    // Assert
    cy.url().should('equal', 'http://localhost:8080/#/submodule-list');
  });
});
