# Project

- [FrontEnd](https://github.com/pesto-students/little-tags-piyush-Ranjan-Mishra-frontend )

- [BackEnd](https://github.com/pesto-students/little-tags-nitingpt000-backend )
# Contents

- [About](#Vuyit)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Technology Used](#technology-used)
- [EndPoints](#endpoints)
- [Misc](#misc)

# Prerequisites

- [node](https://nodejs.org/en/download/)
- [yarn](https://yarnpkg.com/en/docs/install) package manager (instead of npm)
- [VSCode](https://code.visualstudio.com/download) editor for good typescript intellisense
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extension for consistent code formatting
  - [tslint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint) extension for consistent code style

# Getting started

With all the prereqs installed:
1.  clone this repo,
2.  `cd` into it and run `yarn install`. This will install all the node dependencies we need for development.
3.  Run `yarn start` to start the react dev server in specified environment.

# Technology Used

1. NodeJS
2. Bcrypt
3. EJS
4. MongoDB
5. Helmet
6. JWT
7. Cookie
8. Joi
9. GraphQL (WIP)

# EndPoints

### Products:

| | |
|----------|:-------------:|
|GET| /api/v1/categories/products/   <br>   /api/v1/categories/products/:id|
|POST| /api/v1/categories/products|
|PUT| /api/v1/categories/products/:id|
|DELETE| /api/v1/categories/products/:id |

### Categories:

| | |
|----------|:-------------:|
|GET| /api/v1/categories/   <br> /api/v1/categories/:id|
|POST|   /api/v1/categories |
|PUT|    /api/v1/categories/:id  |
|DELETE|    /api/v1/categories/:id  |


### Users:
| | |
|----------|:-------------:|
|GET |    /api/v1/users/    <br>   /api/v1/users/:id |
|POST|    /api/v1/users |
|PUT|    /api/v1/users/:id |
|DELETE|    /api/v1/users/:id  |

### Orders

| | |
|----------|:-------------:|
|Post|  /v1/api/orders/ |
|Post| (Only address)  <br> /v1/api/orders/orderId |
|Delete|  /v1/api/orders/orderId |
|Get|  /v1/api/orders |
