<p align="center">
  <a href="" rel="noopener">
  <img width="1000" height="600" src="/src/assets/Model github.png" alt="Project logo"></a>
</p>

<h1 align="center">Projeto: 
  <a href="https://happy-app-frontend.netlify.app/" target="_blank">[Project]</a>
</h1>
<h3 align="center">Context Api Loading Project.</h3>


<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> 
  Este é um projeto totalmente funcional que permite que qualquer instuição ou pessoa possa cadastrar um 
  ponto no mapa onde seria um orfanato, e qualquer pessoa pode entrar em contato via WhatsApp já podendo
  ter uma rota traçada automaticamente.
  <br />
</p>
<p align="center"> 
  (This is a fully functional project that allows any institution or person to register a
   point on the map where it would be an orphanage, and anyone can get in touch via WhatsApp
   have a route plotted automatically.)
  <br />
</p>

## 📝 Tabela de Conteúdos (Table of Contents)

- [Sobre (About)](#about)
- [Entenda (understand)](#understand)
- [Começando (Getting Started)](#getting_started)
- [Construido com (Built Using)](#built_using)
- [Autores (Authors)](#authors)

## 🧐 Sobre (About) <a name="about"></a>

Uma das maiores dificuldades dos desenvolvedores em ReactJS ou React-Native é o fato de que as vezes é 
preciso passa propriedades de um componente á outro que está muito abaixo da cadeia de componentes,
e isto passa a ser muito complexo no entendimento do código, uma das primeiras soluções foi o uso da lib do
Redux, porém essa lib contêm um grau elevado de complexidade tambem, então algumas atualizações do React
trouxe o Context Api que facilita 1000% a forma de passar propriedas para componentes mais abaixo da cadeia.

(One of the biggest difficulties for developers in ReactJS or React-Native is the fact that it is sometimes
accurately passes properties from one component to another that is far below the component chain,
and this becomes very complex in understanding the code, one of the first solutions was the use of the lib of
Redux, however this lib contains a high degree of complexity as well, so some updates to React
brought the Context Api that facilitates 1000% the way of passing properties to components further down the chain.)

## 🚀 Entenda Context API (Understand Context-API) <a name="understand"></a>

Propriedade (Property)| Funcionalidades (Funcionality)
--------- | ------
React.createContext() | Cria um contexto onde será armazenado o estado global. (Creates a context where the global state will be stored.)
React.Provider | Deve embrulhar os componentes, recebe um value={[Objeto que contem o estado do componente pai e as funções que o modoficam]}. (You must wrap the components, you receive a value = {[Object that contains the state of the parent component and the functions that modify it]}.)
React.Consumer | É o embrulho da renderização. (It's the rendering package.)
Function | Ao por o Consumer você deverá colocar uma função dentro dele que recebe as propriedades e as funções do componente pai como parametro e retorna todo o JSX filhos. (When putting the Consumer you must put a function inside it that receives the properties and functions of the parent component as a parameter and returns all the JSX children.)

## 🏁 Inicio (Getting Started) <a name="getting_started"></a>

### Pré-requisitos (Prerequisites)

Git instado no sistema.
(Git Commando line installed.)

```
git clone https://github.com/paulopkl/Context-API-with-Hooks
```

### Instalação (Installing)

Entre na pasta do projeto e siga os passos abaixo.
(Enter the project folder and follow the steps below)

Instalar Dependências: (Install Dependêncies:)

```
npm install
```

Rodar Servidor web: (Run web server:)

```
npm start
```

Aprecie o projeto em localhost:8000. (Enjoy the project in localhost:8000.)

## ⛏️ Construido usando (Built Using) <a name="built_using"></a>

- [ReactJS](https://reactjs.org/) - ReactJS

## ✍️ Autores (Authors) <a name="authors"></a>

- [@paulopkl](https://github.com/paulopkl) - Idéia e Trabalho Inicial (Idea & Initial work)