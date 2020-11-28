import React from 'react';
import { render } from '@testing-library/react';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';

describe('Confirmation Dialog Component specs', () => {
  it('should verified the title is in the confirmation dialog', () => {
    // Arrange
    const isOpen = true;
    const title = 'test title';
    const labels = {
      closeButton: 'test Close',
      acceptButton: 'test Accept',
    };

    const onAccept = () => {
      console.log('onAccept pressed');
    };

    const onClose = () => {
      console.log('onClose pressed');
    };
    // Act
    const { getByText } = render(
      <ConfirmationDialogComponent
        isOpen={isOpen}
        title={title}
        labels={labels}
        onAccept={onAccept}
        onClose={onClose}
      />
    );

    // Assert
    const element = getByText(title);
    expect(element).not.toBeNull();
  });

  it('should display confirmation dialog using snapshot testing', () => {
    // Arrange
    const isOpen = true;
    const title = 'test title';
    const labels = {
      closeButton: 'test Close',
      acceptButton: 'test Accept',
    };

    const onAccept = () => {
      console.log('onAccept pressed');
    };

    const onClose = () => {
      console.log('onClose pressed');
    };
    // Act
    const { asFragment } = render(
      <ConfirmationDialogComponent
        isOpen={isOpen}
        title={title}
        labels={labels}
        onAccept={onAccept}
        onClose={onClose}
      />
    );

    // Assert
    expect(asFragment()).toMatchSnapshot();
  });

  it('should display confirmation dialog using jest-dom', () => {
    // Arrange
    const isOpen = true;
    const title = 'test title';
    const labels = {
      closeButton: 'test Close',
      acceptButton: 'test Accept',
    };
    const onAccept = () => {
      console.log('onAccept pressed');
    };

    const onClose = () => {
      console.log('onClose pressed');
    };
    // Act
    const { getByText } = render(
      <ConfirmationDialogComponent
        isOpen={isOpen}
        title={title}
        labels={labels}
        onAccept={onAccept}
        onClose={onClose}
      />
    );

    // Assert
    const element = getByText(title);
    expect(element).toBeInTheDocument();
  });
});
