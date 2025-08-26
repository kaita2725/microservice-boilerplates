### Development Notes

## dependencies in package.json

if you want directly corepack yarn install

```json
"dependencies": {
    "cookie-parser": "^1.4.7",
    "cors": "^2.8.5",
    "date-fns": "^4.1.0",
    "dotenv": "^17.2.1",
    "express": "^5.1.0",
    "ioredis": "^5.7.0",
    "pg": "^8.16.3",
    "pg-hstore": "^2.3.4",
    "sequelize": "^6.37.7",
    "uuid": "^11.1.0"
  },
  "devDependencies": {
    "@types/cookie-parser": "^1.4.9",
    "@types/cors": "^2.8.19",
    "@types/express": "^5.0.3",
    "@types/node": "^24.3.0",
    "@types/pg": "^8",
    "@types/uuid": "^10.0.0",
    "nodemon": "^3.1.10",
    "sequelize-cli": "^6.6.3",
    "ts-node": "^10.9.2",
    "tsconfig-paths": "^4.2.0",
    "typescript": "^5.9.2"
  }
```

## env sample

for file naming env use .env.development, .env.production. default is .env

```
NODE_ENV='development'
PORT = 8080
ALLOWED_ORIGINS='http://localhost:8100, http://localhost:3000'
PATH_TO_CERT = 'localhost.crt'
PATH_TO_KEY = 'localhost.key'
DB_USERNAME='yourusername'
DB_PASSWORD="yourpassword"
DB_NAME="database_dev"
DB_HOST="localhost"
DB_DIALECT="postgres"
REDIS_HOST="localhost"
REDIS_PORT=6379
REDIS_PASSWORD="redis"
```

## create or modify routes

Go to routes folder and create a new routes under public routes or protected routes in categories.

- public route path

  ```path
  app/routes/public/
  ```

- protected route path

  ```path
  app/routes/protected/
  ```

- example code to add new route

  ```typescript
  // delete all comments after all changes
  import express, { Response, Request } from "express";
  import {
    function_name_get,
    function_name_post,
    function_name_put,
    function_name_delete,
  } from "../../controllers/path"; //change the function_name that matches with the controller and change the import path

  export const name_of_the_route = express.Router(); // change the name_of_the_route accordingly

  nameoftheroute
    .get("/path", function_name_get)
    .post("/path", function_name_post)
    .put("/path", function_name_put)
    .delete("/path", function_name_delete);
  // change the nameoftheroute, the route path accordingly, and the functionnames
  // path route can be same
  // delete http method if not needed
  ```

after done create and modified the file, import the new route in parent folder:

- for public route publicRoute.ts

  ```path
  route/public/publicRoute.ts
  ```

- for public route publicRoute.ts

  ```path
  route/protected/apiRouter.ts
  ```

- import and add your new route below api comments

  ```typescript
  import { name_of_the_route } from "./categories/path";

  //======================//
  //===== API Routes =====//
  //======================//

  app.use(name_of_the_route);
  ```
