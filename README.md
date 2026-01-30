# 📌 Financial Products – Frontend Case

Este projeto foi desenvolvido como parte de um processo seletivo para a vaga de Desenvolvedora Front-end Pleno, com o objetivo de implementar uma funcionalidade de listagem e detalhamento de produtos financeiros em uma área logada de um banco digital.

<h3> 🎯 Objetivo da aplicação </h3>

Permitir que o usuário:

- Visualize uma lista de produtos financeiros
- Filtre produtos pelo nome
- Veja detalhes de um produto específico
- Ative ou desative produtos
- Tenha feedback visual de carregamento e erros

<h3> 🧠 Tecnologias utilizadas </h3>

- React com TypeScript
- Vite para setup e build
- Material UI (MUI) para componentes visuais e responsividade
- Jest + Testing Library para testes unitários
- Mock local de API para simular consumo de dados

<h3> ▶️ Como rodar o projeto </h3>

``npm install``
``npm run dev``

Para rodar os testes:
``npm run test``

<h3> 🏗️ Arquitetura e organização </h3>

A aplicação foi organizada priorizando separação de responsabilidades, reutilização de componentes e facilidade de manutenção.

src/
├─ components/
│  ├─ ProductList/
│  ├─ ProductItem/
│  ├─ ProductDetails/
│  ├─ SearchInput/
│  ├─ LoadingState/
│  └─ ErrorState/
├─ hooks/
│  └─ useProducts.ts
├─ services/
│  └─ productService.ts
├─ types/
│  └─ Product.ts
├─ pages/
│  └─ ProductsPage.tsx
├─ App.tsx
└─ main.tsx

<h3> 🔹 Por quê essa estrutura? </h3>

- components: UI reutilizável e desacoplada
- hooks: lógica de estado e dados isolada da UI
- services: centralização das chamadas de API
- types: tipagem forte e consistente

<h3> 🌐 Comunicação com a API </h3>

A aplicação consome uma API mockada localmente, simulando uma API REST.

Decisão tomada para:

- Evitar instabilidades de APIs públicas
- Garantir controle total do contrato de dados
- Facilitar testes e previsibilidade
- As chamadas são centralizadas em productService.ts e tratadas com try/catch.

<h3> 🔄 Gerenciamento de estado </h3>

- useState e useEffect
- Hook customizado (useProducts) para:
- Buscar produtos
- Controlar loading e erro
- Gerenciar alteração de status

<h3> 🎨 UI, usabilidade e acessibilidade </h3>

- Layout responsivo (desktop e mobile)
- Modal para exibição de detalhes
- Estados visuais claros para loading e erro

- <h3>Componentes acessíveis: </h3>

  - Labels em inputs
  - Botões navegáveis via teclado
  - Uso de elementos semânticos
  - Acessibilidade para NVDA

<h3> ⚡ Performance </h3>

- Uso de useMemo para otimizar o filtro de produtos
- Componentes pequenos para evitar re-renderizações desnecessárias

<h3> 🧪 Testes </h3>

- Foram implementados testes unitários utilizando Jest e Testing Library, cobrindo:
- Renderização da lista de produtos
- Interação do usuário (filtro ou alteração de status)

<h5> Em um cenário de produção, também seriam aplicados: </h5>

- Testes de integração
- Testes E2E para fluxos críticos

<h3> 📌 Considerações finais </h3>

O foco do projeto foi demonstrar boas práticas de front-end, clareza arquitetural, usabilidade e capacidade de tomada de decisão técnica, mantendo a solução simples e eficiente.
