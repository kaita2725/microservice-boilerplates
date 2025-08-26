# Backend Documentation

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#setup-and-Configuration">Setup and Configuration</a></li>
        <li><a href="#run-the-application-in-development">Run The Application In Development</a></li>
        <li><a href="#run-the-application-in-production">Run The Application In Production</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#Support-the-Project">Support the Project</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <!-- <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li> -->
  </ol>
</details>

## About The Project

This project is a backend boilerplate built with Node.js, Express, Sequelize, and PostgreSQL. It provides a foundation for developing microservices or other backend systems with TypeScript, Redis caching, and various utilities like database migrations and seeders.

Make sure to adjust the contents as necessary, including updating dependencies in the package.json file.

dependencies

```console
 corepack yarn add cookie-parser cors date-fns dotenv express ioredis pg pg-hstore sequelize uuid
```

devdependecies

```console
corepack yarn add -D @types/cookie-parser @types/cors @types/express @types/node @types/uuid nodemon sequelize-cli ts-node tsconfig-paths typescript
```

<p align="right">(<a href="#backend-documentation">back to top</a>)</p>

### Built With

Below are the list of major frameworks/libraries used in this project

- [![Node][Node.js]][Node-url]
- [![Express][Express.js-badge]][Express-url]
- [![Typescript][Typescript-badge]][Typescript-url]
- [![Sequelize][Sequelize-badge]][Sequelize-url]
- [![POSTGRE][POSTGRE-badge]][POSTGRE-url]
- [![REDIS][REDIS-badge]][REDIS-url]

<p align="right">(<a href="#backend-documentation">back to top</a>)</p>

## Getting Started

Before start running the application below are the steps to setting up the projects for development and production.

### Installation

Below are the steps for installing the projects:

1. Clone the repo using github desktop or using CLI:

   ```console
   $ git clone https://github.com/kaita2725/microservice-boilerplates.git
   ```

2. Install the packages that is required in this projects:
   using npm
   ```console
   $ npm install
   ```
   or  
   using yarn
   ```console
   $ yarn
   ```

<p align="right">(<a href="#backend-documentation">back to top</a>)</p>

### Setup and Configuration

Below are the steps for setup, and configuring the projects:

- database migration

```console
$ corepack yarn sequelize db:migrate:all
```

or

```console
$ corepack yarn migrateDBAll
```

- database seeders

```console
$ corepack yarn sequelize db:seed:all
```

or

```console
$ corepack yarn seedDBAll
```

   <p align="right">(<a href="#backend-documentation">back to top</a>)</p>

### Run The Application In Development

For the development run the copy and run this command below:

- run application in development using corepack
  ```console
  $ corepack yarn dev
  ```

<p align="right">(<a href="#backend-documentation">back to top</a>)</p>

### Run The Application In Production

First build and compile typescript to javascript. This will create dist folder:

- corepack yarn build

  ```console
  $ corepack yarn build
  ```

- corepack yarn start

  ```console
  $ corepack yarn start
  ```

<p align="right">(<a href="#backend-documentation">back to top</a>)</p>

## Developer Customization

For details on customizing processing parameters, see [CONTRIBUTING.md](CONTRIBUTING.md#configuration-and-customization).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Support the Project

If you find this project useful and would like to support it, feel free to donate! Your contributions help to keep the development going and improve the project.

- [Support the project on Ko-fi](https://ko-fi.com/kaieitokiyasu)

Thank you for your generosity! 🙏

<p align="right">(<a href="#backend-documentation">back to top</a>)</p>

## Roadmap

list your roadmap or to do list if needed. else remove this.

- [x] basic setup

  - [x] typescript
  - [x] folder structure
  - [x] nodemon for development
  - [x] tsconfig.json
  - [x] .gitignore
  - [x] .env
  - [x] sequelize.config.js
  - [x] .sequelizerc
  - [x] redis.config.js

  <p align="right">(<a href="#backend-documentation">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->

[Node.js]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/en
[Express.js-badge]: https://img.shields.io/badge/Express.js-404D59?style=for-the-badge
[Express-url]: https://expressjs.com/
[Typescript-badge]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[Typescript-url]: https://www.typescriptlang.org/
[Sequelize-badge]: https://img.shields.io/badge/sequelize-323330?style=for-the-badge&logo=sequelize&logoColor=blue
[Sequelize-url]: https://sequelize.org/
[SQLITE-badge]: https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white
[SQLITE-url]: https://sqlite.org/
[POSTGRE-badge]: https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white
[POSTGRE-url]: https://www.postgresql.org/
[REDIS-badge]: https://img.shields.io/badge/redis-%23DD0031.svg?&style=for-the-badge&logo=redis&logoColor=white
[REDIS-url]: https://www.redis.org/
[agendasecurity]: https://medium.com/@ferrosful/nodejs-security-unleashed-exploring-csrf-attack-25a81e59d3fb
[badge-link]: https://dev.to/envoy_/150-badges-for-github-pnk
[openssl-link]: https://dev.to/devland/how-to-generate-and-use-an-ssl-certificate-in-nodejs-2996
