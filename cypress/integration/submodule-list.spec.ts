describe('submodule-list scene specs', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.findByRole('textbox').as('userInput');
    cy.get('input[name="password"]').as('passwordInput');
    cy.findByRole('button').as('loginBtn');
    cy.get('@userInput').type('admin');
    cy.get('@passwordInput').type('test');
    cy.get('@loginBtn').click();
  });

  it('should display "menu" when clicking on "menu" button', () => {
    // Arrange

    // Act
    cy.get('button[aria-label="menu"]').as('menuBtn');

    cy.debug();
    cy.get('@menuBtn').first().click();

    // Assert
    cy.findByRole('list').should('be.visible');
  });

  it('should hide "menu" when pressing esc key after "menu" been displayed', () => {
    // Arrange

    // Act
    cy.get('button[aria-label="menu"]').as('menuBtn');

    cy.get('@menuBtn').first().click();
    cy.findByRole('list').should('be.visible');

    cy.get('body').type('{esc}');

    // Assert
    cy.findByRole('list').should('not.be.visible');
  });

  it('should display "menu-user" when clicking on "menu-user" button', () => {
    // Arrange

    // Act
    cy.get('button[aria-label="menu"]').as('menuBtn');
    cy.get('@menuBtn').first().click();

    // Assert
    cy.get('.MuiList-root > :nth-child(1)').should('be.visible');
  });

  it('should hide "menu-user" when pressing esc key after "menu-user" been displayed', () => {
    // Arrange

    // Act
    cy.get('button[aria-label="menu"]').as('menuBtn');
    cy.get('@menuBtn').first().click();

    cy.get('.MuiList-root > :nth-child(1)').should('be.visible');
    cy.get('body').type('{esc}');

    // Assert
    cy.get('.MuiList-root > :nth-child(1)').should('not.be.visible');
  });

  it('should navigate to "/login" when clicking on "Cerrar sesión" button in "menu-user"', () => {
    // Arrange

    // Act
    cy.get(":nth-child(4) > .MuiIconButton-label > .MuiSvgIcon-root").as('menuUserBtn');
    cy.get('@menuUserBtn').click();

    cy.findByRole('menuitem', { name: 'Cerrar sesión' }).as('logoutBtn');
    cy.get('@logoutBtn').click();

    // Assert
    cy.url().should('equal', 'http://localhost:8080/#/login');
  });

  it('should navigate to "/projects" when clicking on "Proyectos" link', () => {
    // Arrange

    // Act
    cy.findByRole('link', { name: 'Proyectos' }).as('projectLink');
    cy.get('@projectLink').click();

    // Assert
    cy.url().should('equal', 'http://localhost:8080/#/projects');
  });

  it('should navigate to "/employees" when clicking on "Proyectos" link', () => {
    // Arrange

    // Act
    cy.findByRole('link', { name: 'Empleados' }).as('employeeLink');
    cy.get('@employeeLink').click();

    // Assert
    cy.url().should('equal', 'http://localhost:8080/#/employees');
  });
});
