import { render, screen, fireEvent } from '@testing-library/react';
import { SearchInput } from '../SearchInput';

describe('SearchInput', () => {
  it('renders input with correct label and placeholder', () => {
    render(<SearchInput value="" onChange={jest.fn()} />);

    expect(
      screen.getByLabelText('Buscar produto pelo nome'),
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText('Digite o nome do produto'),
    ).toBeInTheDocument();
  });

  it('renders with controlled value', () => {
    render(<SearchInput value="Cartão" onChange={jest.fn()} />);

    const input = screen.getByDisplayValue('Cartão');
    expect(input).toBeInTheDocument();
  });

  it('calls onChange with typed value', () => {
    const onChangeMock = jest.fn();

    render(<SearchInput value="" onChange={onChangeMock} />);

    const input = screen.getByLabelText('Buscar produto pelo nome');

    fireEvent.change(input, { target: { value: 'Crédito' } });

    expect(onChangeMock).toHaveBeenCalledWith('Crédito');
    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });

  it('displays error state when error is true', () => {
    render(
      <SearchInput
        value=""
        onChange={jest.fn()}
        error
        helperText="Produto não encontrado"
      />,
    );

    expect(screen.getByText('Produto não encontrado')).toBeInTheDocument();
  });

  it('renders search icon adornment', () => {
    render(<SearchInput value="" onChange={jest.fn()} />);

    expect(screen.getByTestId('search-icon')).toBeInTheDocument();
  });
});
