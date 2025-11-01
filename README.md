This is a base node js project template,which has been prepared by keeping some of the most important code principles and project management recommendations.It can be changed and used later.


`src`->inside the src folder all the actual source code regarding the project will reside,this will not include any kind of tests.(Separate folder for tests)

Lets take a look inside src folder

-`config`->Inthis  folder anything and everything regarding  any configuration or setup of a library or module will br done.For example:setting up `dotenv` so that we can use the environment variables anywhere in a cleaner fashion ,this is done in the `server-config.js `.One more example can be to setup  logging library that can help to prepare meaningful logs,so configuration for this library should also be done here.

-`routes`->In the routes folder we register a route and the corresponding middleware and controllers to it.

-`middleewares`->they are  just going to intercept the incoming requests where we can write our validators ,authenticators etc.

-`controllers`->they are kind of the last middlewares as post them we call the business layer to execute  the business logic.In the controllers we just receive the incoming request and data   and then pass it to the business layer,and once the business layer returns an output we structure the API response in controllers and send the output.



















```
{
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
alternatively  ->go to the `src` folder and run this command:```npx sequelize init```-> with this command we get `config.json`file `migrations`,`seeders` ,`models` folder on its own
-If setting up developemnet environment then write the name of username of db and in dialect mention whatever db is using for eg mysql,mariadb etc
-If you are setting up test or prod environment,make sure you also replace the host  with the hosted db url.