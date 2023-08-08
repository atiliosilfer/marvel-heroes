# Documentação da Aplicação

### Bibliotecas utilizadas para desenvolver esse projeto:

- radix: para criação de tabs, select e icones
- axios: para comunicação com API
- jose: para mock de JWT - criação e validação
- react-cookies: para salvar o token
- react-router-dom: para navegação entre páginas
- styled-components: para estilização

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

### 📋 Pré-requisitos

Para iniciar o projeto é necessário ter o [Node.js](https://nodejs.org/en) instalado em sua maquina! Recomendado a versão LTS

### 🔧 Instalação

Após clonar esse repositório na pasta do projeto é necessário rodar o seguinte comando no terminal para baixar as dependencias do projeto:

```
npm install
```

Após instalar as dependencias basta iniciar o projeto utilizando o comando abaixo:

```
npm run dev
```

### ❗ Importante

- Para funcionamento da [API da Marvel](https://developer.marvel.com) , rodar a aplicação no localhost:3000 e não diretamente com o IP ex (http://128.2.1.1:3000/)

- O mock JWT tem um tempo de expiração de 0.1 horas, ou seja 6 minutos


### 📝 Melhorias

- Algumas questões de estilização, como deixar marcado no menu lateral a página atual, deixar o avatar do agente selecionado no dropdown de seleção e pequenos detalhes.
---