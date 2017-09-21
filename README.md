# ExpressJS-Skeleton:

MVC application structure to use with NodeJS.
It can be use like a complete web application, or like a simple API REST server.

## Requirements:

* [NodeJS](https://nodejs.org)
* [ExpressJS](http://http://expressjs.com)
* [SequelizeJS](http://http://docs.sequelizejs.com)
* [PugJS](https://pugjs.org)
* And others ... Look into package.json to see all dependencies.

## Installation:

    ##
    # Setting up from Git:
    # - Clone the repository.
    # - Move inside.
    # - Install dependencies.
    ##
    git clone https://github.com/tuken80/expressjs-skeleton && cd expressjs-skeleton && npm i

    ##
    # Setting up the database:
    # - Rename the configurations file.
    # - Edit it.
    ##
    mv conf/database.json.dist conf/database.json && vi conf/database.json

>**Note**
>Don't forget to create the associate database.
