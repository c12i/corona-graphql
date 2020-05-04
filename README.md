<h1 align="center">corona-graphql 🦠</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> A COVID-19 Graph-QL server. Simply wrapping the public API with Grapg-QL

### ✨ [Demo](https://)

## Install

```sh
yarn install
```

## Usage

```sh
yarn run dev
```

## Schema

```ts
type WorldwideCases {
  updated: Int!
  cases: Int!
  todayCases: Int!
  deaths: Int!
  todayDeaths: Int!
  recovered: Int!
  active: Int!
  critical: Int!
  casesPerOneMillion: Int!
  deathsPerOneMillion: Int!
  tests: Int!
  testsPerOneMillion: Int!
  affectedCountries: Int!
}

type Country {
  updated: Int!
  country: String!
  countryInfo: CountryInfo!
  cases: Int!
  todayCases: Int!
  deaths: Int!
  todayDeaths: Int!
  recovered: Int!
  active: Int!
  critical: Int!
  casesPerOneMillion: Int!
  deathsPerOneMillion: Int!
  tests: Int!
  testsPerOneMillion: Int!
  continent: String!
}

type CountryInfo {
  iso2: String!
  iso3: String!
  lat: Float!
  long: Float!
  flag: String!
}

type Continent {
  updated: Int!
  cases: Int!
  todayCases: Int!
  deaths: Int!
  todayDeaths: Int!
  recovered: Int!
  active: Int!
  critical: Int!
  continent: String!
  countries: [String!]!
}

type Query {
  worldwideStats: WorldwideCases!
  allCountriesStats(query: String): [Country!]!
  getSingleCountryCases(country: String!): Country!
  allContinentStats(query: String): [Continent!]!
  getSingleContinent(continent: String!): Continent!
}

```

## Author

👤 **collinsmuriuki**

* Website: https://muriuki.dev
* Github: [@collinsmuriuki](https://github.com/collinsmuriuki)

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2020 [collinsmuriuki](https://github.com/collinsmuriuki).<br />
This project is [MIT](LICENSE) licensed.