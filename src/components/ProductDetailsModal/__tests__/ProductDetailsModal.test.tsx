import { render, screen, fireEvent } from '@testing-library/react';
import { ProductDetailsModal } from '../ProductDetailsModal';
import type { FinancialProduct } from '@/types/Product';

describe('ProductDetailsModal', () => {
  const mockProduct: FinancialProduct = {
    id: '1',
    name: 'Cartão Platinum',
    type: 'Cartão de crédito',
    status: 'active',
    description: 'Cartão com benefícios exclusivos',
    interestRate: 3.5,
    createdAt: '2023-01-10',
  };

  it('should render product details when product is provided', () => {
    render(
      <ProductDetailsModal
        product={mockProduct}
        open={true}
        onClose={jest.fn()}
      />,
    );

    expect(screen.getByText('Cartão Platinum')).toBeInTheDocument();
    expect(screen.getByText(/Cartão de crédito/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Cartão com benefícios exclusivos/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/3.5%/)).toBeInTheDocument();
    expect(screen.getByText(/09\/01\/2023/)).toBeInTheDocument();
  });

  it('should not render modal when product is null', () => {
    const { container } = render(
      <ProductDetailsModal product={null} open={false} onClose={jest.fn()} />,
    );

    expect(container).toBeEmptyDOMElement();
  });

  it('should call onClose when clicking the close button', () => {
    const onCloseMock = jest.fn();

    render(
      <ProductDetailsModal
        product={mockProduct}
        open={true}
        onClose={onCloseMock}
      />,
    );

    fireEvent.click(screen.getByRole('button', { name: /fechar/i }));

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });
});
