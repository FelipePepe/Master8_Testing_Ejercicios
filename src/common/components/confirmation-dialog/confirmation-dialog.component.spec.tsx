import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ConfirmationDialogComponent } from './confirmation-dialog.component';
import { Typography } from '@material-ui/core';

describe('Confirmation Dialog Components specs', () => {
  it('Should display confirmation dialog components click on Accept', () => {
    // Arrange
    const props = {
      isOpen: true,
      title: 'test title',
      labels: {
        closeButton: 'test Close',
        acceptButton: 'test Accept',
      },
      onAccept: jest.fn(),
      onClose: jest.fn(),
    };

    const itemName = 'Hello Testing World';

    // Act
    render(
      <ConfirmationDialogComponent {...props}>
        <Typography variant="body1">{itemName}</Typography>
      </ConfirmationDialogComponent>
    );

    const element = screen.getByRole('button', {
      name: props.labels.acceptButton,
    });

    userEvent.click(element);

    // Assert
    expect(props.onAccept).toHaveBeenCalled();
  });
  it('Should display confirmation dialog components click on Accept', () => {
    // Arrange
    const props = {
      isOpen: true,
      title: 'test title',
      labels: {
        closeButton: 'test Close',
        acceptButton: 'test Accept',
      },
      onAccept: jest.fn(),
      onClose: jest.fn(),
    };

    const itemName = 'Hello Testing World';

    // Act
    render(
      <ConfirmationDialogComponent {...props}>
        <Typography variant="body1">{itemName}</Typography>
      </ConfirmationDialogComponent>
    );

    const element = screen.getByRole('button', {
      name: props.labels.acceptButton,
    });

    userEvent.click(element);

    // Assert
    expect(props.onAccept).toHaveBeenCalled();
  });

  it('Should display confirmation dialog components', () => {
    // Arrange
    const props = {
      isOpen: true,
      title: 'test title',
      labels: {
        closeButton: 'test Close',
        acceptButton: 'test Accept',
      },
      onAccept: jest.fn(),
      onClose: jest.fn(),
    };

    const itemName = 'Hello Testing World';

    // Act
    render(
      <ConfirmationDialogComponent {...props}>
        <Typography variant="body1">{itemName}</Typography>
      </ConfirmationDialogComponent>
    );

    const element = screen.getByRole('presentation');

    // Assert
    expect(element).toBeInTheDocument();
  });

  it('Should display confirmation dialog components using snapshot testing', () => {
    // Arrange
    const props = {
      isOpen: true,
      title: 'test title',
      labels: {
        closeButton: 'test Close',
        acceptButton: 'test Accept',
      },
      onAccept: jest.fn(),
      onClose: jest.fn(),
    };

    const itemName = 'Hello Testing World';

    // Act
    render(
      <ConfirmationDialogComponent {...props}>
        <Typography variant="body1">{itemName}</Typography>
      </ConfirmationDialogComponent>
    );

    const element = screen.getByRole('presentation');

    // Assert
    expect(element).toMatchSnapshot();
  });
});
