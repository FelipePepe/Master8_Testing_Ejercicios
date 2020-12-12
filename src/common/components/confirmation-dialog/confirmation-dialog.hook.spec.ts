import { renderHook, act } from '@testing-library/react-hooks';
import { useConfirmationDialog } from './confirmation-dialog.hook';

describe('ConfirmationDialog specs', () => {
  it('should return an object with isOpen properties equal to false and setIsOpen a function when it calls it', () => {
    // Arrange

    // Act
    const { result } = renderHook(() => useConfirmationDialog());
    // Assert
    expect(result.current.isOpen).toEqual(false);
    expect(result.current.itemToDelete).toEqual({
      id: '',
      name: '',
    });
    expect(result.current.onAccept).toEqual(expect.any(Function));
    expect(result.current.onClose).toEqual(expect.any(Function));
  });

  it('should return an object with onOpenDialog modify properties isOpen to true and itemToDelete to name 1', () => {
    // Arrange

    // Act
    const { result } = renderHook(() => useConfirmationDialog());
    act(() => {
      result.current.onOpenDialog({
        id: '1',
        name: 'name 1',
      });
    });
    // Assert
    expect(result.current.isOpen).toEqual(true);
    expect(result.current.itemToDelete).toEqual({
      id: '1',
      name: 'name 1',
    });
    expect(result.current.onAccept).toEqual(expect.any(Function));
    expect(result.current.onClose).toEqual(expect.any(Function));
  });
});
