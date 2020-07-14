npm init -y 

Modificar scripts iniciales:
"scripts": {
    "start": "DEBUG=app:* nodemon index.js", 
    "build": "NODE_ENV=production node index.js"
  }

Configuración de .eslint.json 
Crea el archivo con las siguientes configuraciones

  {
    "parserOptions": {
      "ecmaVersion": 2018                             /** indica la versión de EcmaScript que se va a usar
    }, 
    "extends": ["eslint:recommended", "prettier"],    /** Indica que extienda la versión recomendada y que utilice prettier
    "env": {                                          /** Configura las variables de entorno indicando que se usarán es6, node, mocha
      "es6": true,
      "node": true,
      "mocha": true
    },
    "rules": {                                        /** regla de no poner la consola es unicamente un warning, no un error
      "no-console": "warn"
    }
  }

Se configura prettier
Crear archivo .prettierrc.json

{
  "tabWidth": 2,        /** numero de espacios en los taps 
  "semi": true,         /** que se utilice ; 
  "singleQuote": true   /** comillas simples no dobles
}


instalar express y dotenv  /** prodccion
npm i express dotenv


instalar dependencias de desarrollo:

/* -D abreviatura de --save-dev
npm i -D nodemon eslint eslint-config-prettier eslint-plugin-prettier prettier

/* installar hook para que cuando se haga commit se formatee con eslint y prettier
npx mrm lint-staged

/* Se crea archivo config/index.js de configuracion de variables de entorno ENV 

require('dotenv').config();

const config = {
  dev: process.env.NODE_ENV !== 'procdution',   /** cuando no esté en prodccion */
  port: process.env.PORT || 3000                /** buena practica tener una variable global para el puerto */
}

module.exports = { config };