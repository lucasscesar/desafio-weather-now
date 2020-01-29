# DesafioWeatherNow

## Como instalar

Execute `npm install or yarn install`

## Como usar

Execute `ng serve` para uso em dev e navega na aplicação pelo host `http://localhost:4200/`. As alterações serão automaticamente recarregadas.

## Como buildar o desafio

Execute `ng build` para buildar o desafio. Os arquivos de distribuição serão armazenados na pasta `dist/`. Use a flag `--prod` para a distribuição em produção.

## Como aprender sobre o desafio

O projeto é baseado em componentes e está estruturado da seguinte forma: 

```
desafio-weather-now/
├── dist/ (arquivos de distribuição)
└── src/
    ├── app
    │   ├── components 
    │   │   ├── card (componente que monta o card e suas variações)
    │   │   └── loader (componente que possui o loader)
    │   │ 
    │   ├── services (chamadas de APIs)
    │   │    └── city 
    │   │
    │   ├── models (models das abstrações usadas)
    │   └── app.components.ts (componente principal)
    │
    ├── assets
    │   ├── imgs (imagens do projeto)
    │   └── scss (global styles)
    │
    └── environments (arquivos de ambiente)

```

### Funcionamento

-   `app.components.ts`: faz as chamadas iniciais e possui as cidades que devem ser renderizadas nos cards
-   `components/card/card.component.ts`: recebe o nome da cidade (parâmetro: `name`), o intervalo de tempo por minuto (parâmetro: `minutesInterval`) e a exibição (parâmetro: `details`) e faz toda a lógica de chamada de api e construção.
-   `components/loader/loader.component.ts`: responsável pelo loader dentro dos cards e tem a possibilidade de tamanho (parâmetro: `size`)
-   `service/city.service.ts`: chamada de API para `api.openweathermap.org` buscando as cidades por nome


## Como executar os teste unitários

Execute `ng test` para rodar os testes unitários via [Karma](https://karma-runner.github.io).

## Como executar os testes end-to-end

Execute `ng e2e` para rodar os testes end-to-end via  [Protractor](http://www.protractortest.org/).