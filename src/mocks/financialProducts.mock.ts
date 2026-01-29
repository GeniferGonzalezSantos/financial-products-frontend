import type { FinancialProduct } from '@/types/Product';

export const financialProductsMock: FinancialProduct[] = [
  {
    id: '1',
    name: 'Cartão Itaú Platinum',
    type: 'Cartão de Crédito',
    status: 'active',
    description:
      'Cartão de crédito com benefícios exclusivos, programa de pontos e anuidade diferenciada.',
    interestRate: 3.5,
    createdAt: '2022-06-15',
  },
  {
    id: '2',
    name: 'Empréstimo Pessoal',
    type: 'Empréstimo',
    status: 'inactive',
    description: 'Empréstimo com parcelas fixas e contratação 100% digital.',
    interestRate: 2.1,
    createdAt: '2021-11-03',
  },
  {
    id: '3',
    name: 'CDB Itaú 120%',
    type: 'Investimento',
    status: 'active',
    description:
      'Certificado de Depósito Bancário com rendimento atrelado ao CDI.',
    createdAt: '2023-02-20',
  },
  {
    id: '4',
    name: 'Cartão Itaú Gold',
    type: 'Cartão de Crédito',
    status: 'inactive',
    description:
      'Cartão de crédito para o dia a dia, com aceitação internacional.',
    interestRate: 4.1,
    createdAt: '2020-08-10',
  },
  {
    id: '5',
    name: 'Crédito Consignado',
    type: 'Empréstimo',
    status: 'active',
    description: 'Crédito com taxas reduzidas e desconto direto em folha.',
    interestRate: 1.8,
    createdAt: '2019-05-27',
  },
];
