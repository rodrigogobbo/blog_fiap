# Blog Fiap

Este projeto é uma aplicação React que usa a API de gerenciamento de conteúdo Contentful para exibir postagens e informações de maneira dinâmica e eficiente. Ideal para blogs, portais de notícias ou websites corporativos que necessitam de um frontend ágil e adaptável.

## Funcionalidades

- **Visualização Dinâmica de Conteúdo**: Carrega e exibe conteúdo do Contentful.
- **Estrutura Modular**: Composto por componentes reutilizáveis como Header, Footer, e páginas específicas.
- **Responsivo**: Adequado para dispositivos móveis e desktops.

## Tecnologias Utilizadas

Este projeto foi desenvolvido com:

- React.js
- Contentful SDK
- CSS Modules para estilização

## Início Rápido

Siga as instruções abaixo para configurar o projeto localmente.

### Pré-requisitos

Você precisará do Node.js e NPM/Yarn instalados em seu ambiente de desenvolvimento, além das credenciais do Contentful (Space ID e Access Token).

### Instalação

Clone o repositório para sua máquina local e instale as dependências.

bash
git clone https://github.com/rodrigogobbo/blog_fiap.git
cd blog_fiap
npm install


### Configuração das Variáveis de Ambiente
Crie um arquivo .env.local na raiz do projeto e adicione as seguintes variáveis de ambiente:

VITE_SPACE_ID=your_space_id_here
VITE_ACCESS_TOKEN=your_access_token_here


### Para rodar o projeto, execute:

npm start

O projeto estará disponível em http://localhost:3000.

### Estrutura do Projeto
Descrição dos principais diretórios e arquivos:

src/components/Header.jsx: Cabeçalho do site.
src/components/Footer.jsx: Rodapé do site.
src/pages/PageHome.jsx: Página inicial do site.
src/pages/PagePost.jsx: Página para exibir posts individuais.
src/layout/LayoutDefault.jsx: Layout padrão para as páginas.
