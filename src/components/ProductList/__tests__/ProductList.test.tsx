import { render, screen, fireEvent } from '@testing-library/react';
import { ProductList } from '../ProductList';
import type { FinancialProduct } from '@/types/Product';
import type { ProductItemProps } from '@/components/ProductItem/type';

const mockProducts: FinancialProduct[] = [
  {
    id: '1',
    name: 'Cartão Platinum',
    type: 'Cartão de Crédito',
    status: 'active',
    description: '',
    createdAt: '',
  },
  {
    id: '2',
    name: 'Conta Digital',
    type: 'Conta',
    status: 'inactive',
    description: '',
    createdAt: '',
  },
];

jest.mock('@/components/ProductItem/ProductItem', () => ({
  ProductItem: ({ product, onSelect, onToggleStatus }: ProductItemProps) => (
    <div data-testid="product-item">
      <span>{product.name}</span>

      <button onClick={() => onSelect(product)}>select</button>

      <button onClick={() => onToggleStatus(product.id)}>toggle</button>
    </div>
  ),
}));

describe('ProductList', () => {
  it('renders a ProductItem for each product', () => {
    render(
      <ProductList
        products={mockProducts}
        onSelectProduct={jest.fn()}
        onToggleStatus={jest.fn()}
      />,
    );

    const items = screen.getAllByTestId('product-item');
    expect(items).toHaveLength(2);

    expect(screen.getByText('Cartão Platinum')).toBeInTheDocument();
    expect(screen.getByText('Conta Digital')).toBeInTheDocument();
  });

  it('calls onSelectProduct when ProductItem triggers select', () => {
    const onSelectProduct = jest.fn();

    render(
      <ProductList
        products={mockProducts}
        onSelectProduct={onSelectProduct}
        onToggleStatus={jest.fn()}
      />,
    );

    fireEvent.click(screen.getAllByText('select')[0]);

    expect(onSelectProduct).toHaveBeenCalledWith(mockProducts[0]);
  });

  it('calls onToggleStatus when ProductItem triggers toggle', () => {
    const onToggleStatus = jest.fn();

    render(
      <ProductList
        products={mockProducts}
        onSelectProduct={jest.fn()}
        onToggleStatus={onToggleStatus}
      />,
    );

    fireEvent.click(screen.getAllByText('toggle')[1]);

    expect(onToggleStatus).toHaveBeenCalledWith('2');
  });
});
