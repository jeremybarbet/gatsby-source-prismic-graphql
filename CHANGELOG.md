# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [3.6.3](https://github.com/jeremybarbet/gatsby-source-prismic-graphql/compare/v3.6.2...v3.6.3) (2020-07-13)

**Note:** Version bump only for package root

## [3.6.2](https://github.com/jeremybarbet/gatsby-source-prismic-graphql/compare/v3.6.1...v3.6.2) (2020-03-22)

### Bug Fixes

- pass getCache ([bbeba38](https://github.com/jeremybarbet/gatsby-source-prismic-graphql/commit/bbeba38))

## [3.6.1](https://github.com/jeremybarbet/gatsby-source-prismic-graphql/compare/v3.6.0...v3.6.1) (2020-02-25)

### Bug Fixes

- missing access token ([46dad3b](https://github.com/jeremybarbet/gatsby-source-prismic-graphql/commit/46dad3b))

# [3.6.0](https://github.com/jeremybarbet/gatsby-source-prismic-graphql/compare/v3.5.3...v3.6.0) (2020-02-25)

### Features

- handle private api with preview ([8055aa4](https://github.com/jeremybarbet/gatsby-source-prismic-graphql/commit/8055aa4))
- sanitize access token ([14edaf4](https://github.com/jeremybarbet/gatsby-source-prismic-graphql/commit/14edaf4))

## [3.5.3](https://github.com/jeremybarbet/gatsby-source-prismic-graphql/compare/v3.5.2...v3.5.3) (2020-02-24)

### Bug Fixes

- reduce lodash bundle size ([f05e4cc](https://github.com/jeremybarbet/gatsby-source-prismic-graphql/commit/f05e4cc))
- remove null from query ([3ca4bb0](https://github.com/jeremybarbet/gatsby-source-prismic-graphql/commit/3ca4bb0))
- stripSharp with preview ([58e424a](https://github.com/jeremybarbet/gatsby-source-prismic-graphql/commit/58e424a))
- types ([36f7cb0](https://github.com/jeremybarbet/gatsby-source-prismic-graphql/commit/36f7cb0))

### Features

- add prismic toolbar v3 ([1739cc5](https://github.com/jeremybarbet/gatsby-source-prismic-graphql/commit/1739cc5))

## [3.5.2](https://github.com/jeremybarbet/gatsby-source-prismic-graphql/compare/v3.5.1...v3.5.2) (2020-02-16)

### Bug Fixes

- getter options ([905248f](https://github.com/jeremybarbet/gatsby-source-prismic-graphql/commit/905248ff378ed8ca26dc620159115b36017d79ce))

## [3.5.1](https://github.com/jeremybarbet/gatsby-source-prismic-graphql/compare/v3.5.0...v3.5.1) (2020-02-16)

**Note:** Version bump only for package root

# [3.5.0](https://github.com/jeremybarbet/gatsby-source-prismic-graphql/compare/v3.4.0...v3.5.0) (2020-02-16)

### Bug Fixes

- change travis build to deploy stable version ([46854b8](https://github.com/jeremybarbet/gatsby-source-prismic-graphql/commit/46854b8))

### Features

- additional query size optimization ([8fcec72](https://github.com/jeremybarbet/gatsby-source-prismic-graphql/commit/8fcec72))
- optimize query size ([57e2940](https://github.com/jeremybarbet/gatsby-source-prismic-graphql/commit/57e2940))

# [3.4.0](https://github.com/birkir/gatsby-source-prismic-graphql/compare/v3.4.0-beta.2...v3.4.0) (2020-01-27)

### Features

- add filter explanation to README ([4ff8a62](https://github.com/birkir/gatsby-source-prismic-graphql/commit/4ff8a62))
- add optional filter to page options ([8bb76aa](https://github.com/birkir/gatsby-source-prismic-graphql/commit/8bb76aa))
- support short language codes in generated paths ([cf559d6](https://github.com/birkir/gatsby-source-prismic-graphql/commit/cf559d6))

# [3.4.0-beta.2](https://github.com/birkir/gatsby-source-prismic-graphql/compare/v3.4.0-beta.1...v3.4.0-beta.2) (2019-08-20)

### Bug Fixes

- remove/delete traverse ([927230d](https://github.com/birkir/gatsby-source-prismic-graphql/commit/927230d))

# [3.4.0-beta.1](https://github.com/birkir/gatsby-source-prismic-graphql/compare/v3.4.0-beta.0...v3.4.0-beta.1) (2019-07-29)

### Bug Fixes

- bump prismic-javascript dep to fix timeout connection issues ([36f04f2](https://github.com/birkir/gatsby-source-prismic-graphql/commit/36f04f2))
- check if proptypes can be added to StaticQuery ([f05a5e6](https://github.com/birkir/gatsby-source-prismic-graphql/commit/f05a5e6))

# [3.4.0-beta.0](https://github.com/birkir/gatsby-source-prismic-graphql/compare/v3.3.1...v3.4.0-beta.0) (2019-07-18)

### Bug Fixes

- improve pagination context var names; pass context for previews ([166321c](https://github.com/birkir/gatsby-source-prismic-graphql/commit/166321c))
- languages example ([84f9253](https://github.com/birkir/gatsby-source-prismic-graphql/commit/84f9253))
- logic problems with dynamic pagination already in example ([eb0fa26](https://github.com/birkir/gatsby-source-prismic-graphql/commit/eb0fa26))
- multi-locale path-generation logic, enhanced typing ([bbe2aa5](https://github.com/birkir/gatsby-source-prismic-graphql/commit/bbe2aa5))
- multi-locale support compatible with pagination ([bffeea2](https://github.com/birkir/gatsby-source-prismic-graphql/commit/bffeea2))
- sortBy works for all document types ([d861c9d](https://github.com/birkir/gatsby-source-prismic-graphql/commit/d861c9d))
- support previews in other than defaultLang ([e621a76](https://github.com/birkir/gatsby-source-prismic-graphql/commit/e621a76))

### Features

- add direct support for referencing next and prev pages ([a3c06db](https://github.com/birkir/gatsby-source-prismic-graphql/commit/a3c06db))
- add support for passing sortBy for pages ([aa893b4](https://github.com/birkir/gatsby-source-prismic-graphql/commit/aa893b4))
- create and expose cursor encoding helpers ([a1959ac](https://github.com/birkir/gatsby-source-prismic-graphql/commit/a1959ac))
- enable backwards pagination by providing lastPageEndCursor ([2f0fe1b](https://github.com/birkir/gatsby-source-prismic-graphql/commit/2f0fe1b))

## [3.3.1](https://github.com/birkir/gatsby-source-prismic-graphql/compare/v3.3.0...v3.3.1) (2019-07-18)

### Bug Fixes

- typo in README.md ([f4e5390](https://github.com/birkir/gatsby-source-prismic-graphql/commit/f4e5390))

# [3.3.0](https://github.com/birkir/gatsby-source-prismic-graphql/compare/v3.2.0...v3.3.0) (2019-07-09)

### Bug Fixes

- prettier formatting in unrelated file so tests pass ([a56f66e](https://github.com/birkir/gatsby-source-prismic-graphql/commit/a56f66e))
- work around 20-page limit for Prismic queries ([861aedf](https://github.com/birkir/gatsby-source-prismic-graphql/commit/861aedf))

### Features

- gatsby-image support ([f598dcd](https://github.com/birkir/gatsby-source-prismic-graphql/commit/f598dcd))

# [3.2.0](https://github.com/birkir/gatsby-source-prismic-graphql/compare/v3.0.0-alpha.0...v3.2.0) (2019-06-04)

### Bug Fixes

- add apollo-boost dependency ([c4334c8](https://github.com/birkir/gatsby-source-prismic-graphql/commit/c4334c8))
- auto yes ([cc26e91](https://github.com/birkir/gatsby-source-prismic-graphql/commit/cc26e91))
- circleci ([fe9df4a](https://github.com/birkir/gatsby-source-prismic-graphql/commit/fe9df4a))
- circleci ([fb36a78](https://github.com/birkir/gatsby-source-prismic-graphql/commit/fb36a78))
- default files ([be2afec](https://github.com/birkir/gatsby-source-prismic-graphql/commit/be2afec))
- dependency and load variables ([e826e5f](https://github.com/birkir/gatsby-source-prismic-graphql/commit/e826e5f))
- ensure location is in props ([82eb8f0](https://github.com/birkir/gatsby-source-prismic-graphql/commit/82eb8f0))
- example package name ([50ab749](https://github.com/birkir/gatsby-source-prismic-graphql/commit/50ab749))
- force publish ([d792bc9](https://github.com/birkir/gatsby-source-prismic-graphql/commit/d792bc9))
- git changes ([343dd00](https://github.com/birkir/gatsby-source-prismic-graphql/commit/343dd00))
- git config ([7b4a68c](https://github.com/birkir/gatsby-source-prismic-graphql/commit/7b4a68c))
- lerna bootstrap ([2a1a256](https://github.com/birkir/gatsby-source-prismic-graphql/commit/2a1a256))
- lerna publish ([7fec548](https://github.com/birkir/gatsby-source-prismic-graphql/commit/7fec548))
- meh ([569fea5](https://github.com/birkir/gatsby-source-prismic-graphql/commit/569fea5))
- npm login ([da0286c](https://github.com/birkir/gatsby-source-prismic-graphql/commit/da0286c))
- prettier ([fbc4395](https://github.com/birkir/gatsby-source-prismic-graphql/commit/fbc4395))
- prettier ([68ce94c](https://github.com/birkir/gatsby-source-prismic-graphql/commit/68ce94c))
- preview page with no pages option ([d271ca0](https://github.com/birkir/gatsby-source-prismic-graphql/commit/d271ca0))
- ssr strip whitespace fetch ([3f843c2](https://github.com/birkir/gatsby-source-prismic-graphql/commit/3f843c2))
- template title ([9b35c68](https://github.com/birkir/gatsby-source-prismic-graphql/commit/9b35c68))
- test deploy ([11bb7b5](https://github.com/birkir/gatsby-source-prismic-graphql/commit/11bb7b5))
- update graphql source plugin ([3b9bab0](https://github.com/birkir/gatsby-source-prismic-graphql/commit/3b9bab0))

### Features

- fragments ([34f9c78](https://github.com/birkir/gatsby-source-prismic-graphql/commit/34f9c78))
- fragments ([0bc6912](https://github.com/birkir/gatsby-source-prismic-graphql/commit/0bc6912))
- languages ([09a1c47](https://github.com/birkir/gatsby-source-prismic-graphql/commit/09a1c47))
- static query ([6666e34](https://github.com/birkir/gatsby-source-prismic-graphql/commit/6666e34))

# 3.0.0-alpha.0 (2019-03-19)

### Bug Fixes

- pageContext as variables by default ([0cd8d57](https://github.com/birkir/gatsby-source-prismic-graphql/commit/0cd8d57))
- remove multiple graphql packages ([ecd1a09](https://github.com/birkir/gatsby-source-prismic-graphql/commit/ecd1a09))
