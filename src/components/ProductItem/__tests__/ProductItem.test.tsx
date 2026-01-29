import { render, screen, fireEvent } from '@testing-library/react';
import { ProductItem } from '../ProductItem';
import type { FinancialProduct } from '@/types/Product';

describe('ProductItem', () => {
  const baseProduct: FinancialProduct = {
    id: '1',
    name: 'Cartão Platinum',
    type: 'Cartão de Crédito',
    status: 'active',
    description: '',
    createdAt: '',
  };

  it('calls onToggleStatus when switch is clicked', () => {
    const onToggleStatusMock = jest.fn();
    const onSelectMock = jest.fn();

    render(
      <ProductItem
        product={baseProduct}
        onToggleStatus={onToggleStatusMock}
        onSelect={onSelectMock}
      />,
    );

    const switchElement = screen.getByRole('switch');
    fireEvent.click(switchElement);

    expect(onToggleStatusMock).toHaveBeenCalledWith('1');
  });

  it('renders switch unchecked when product is inactive', () => {
    render(
      <ProductItem
        product={{ ...baseProduct, status: 'inactive' }}
        onToggleStatus={jest.fn()}
        onSelect={jest.fn()}
      />,
    );

    const switchElement = screen.getByRole('switch') as HTMLInputElement;

    expect(switchElement.checked).toBe(false);
    expect(screen.getByText('Inativo')).toBeInTheDocument();
  });
});
