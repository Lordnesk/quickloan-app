<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).


# Preguntas a responder.

## 1. ¿Qué propósito cumple el archivo main.ts en un proyecto NestJS y por qué es crucial en la configuración inicial?

El papel que cumple es el de configurar y arrancar el servidor, ademas de que configura las capas externas sin involucrarse con la logica de negocio

## 2. ¿Qué diferencia existe entre app.module.ts y app.controller.ts? ¿Cómo se relacionan estos archivos con la modularidad y la estructura de la aplicación?

*app.module.ts*, es el archivo que agrupa y organiza la configuracion y los modulos de la aplicacion, mientras que *app.controllers.ts* es el que actua como interfaz con el mundo exterior y la logica de la aplicación, recibiendo las solicitudes HTTP, delegando la logica de negocio a las capas inferiores

## 3. ¿Por qué crees que es importante modularizar la aplicación separando funcionalidades en diferentes módulos?

Es importante para poder facilitar la organización y el mantenimiento, ademas de poder hacer las aplicaciones mas escalables y faciles de depurar.

## 4. ¿Cómo crees que afecta la modularidad al mantenimiento y escalabilidad de la aplicación?

Afecta de una manera positiva puesto que al momento de hacer cambios y mejoras se puede hacer dentro del modulo en cuestion sin necesidad de tocar otras partes del codigo y la logica de negocio

## 5. Despues de crear los archivos de los módulos, ¿qué archivos se generan y cómo se relacionan con los módulos creados?

Se genera una carpeta con el nombre del modulo y dentro un archivo con el nombre del modulo. Dentro se crea: 

`import { Module } from '@nestjs/common';

@Module({})
export class LoansModule {}`

El cual importa el decorador @Module para que la clase se conporte como un modulo.

## 6. ¿Qué sucede si defines incorrectamente un decorador en un controlador? ¿Cómo afecta esto a la funcionalidad del endpoint?

Podria presentar fallos en la ejecucion del endpoint, presentar problemas de autenticación y autorización, validacion incorrecta de datos, rendimiento degradado, comportamiento inesperado, falta de registro o monitorización.

## 7. ¿Por qué es importante manejar rutas dinámicas (por ejemplo, @Get(':id')) en aplicaciones que interactúan con bases de datos?

Es importante para dar mas opciones de busqueda a los usuarions y hacer mas gratificante su experiencia.

## 8. ¿Qué ventajas tiene manejar la lógica de negocio en servicios en lugar de controladores?

La ventaja principal que tiene hacerlo de esta manera es la separción de responsabilidades, lo cual facilita la depuracion y escalabilidad ademas de que permite la reutilizacion de logica a lo largo del codigo.

## 9. ¿Cómo se relaciona la inyección de dependencias con la modularidad y la capacidad de prueba de la aplicación?

La inyección de dependencias facilita la modularidad al desacoplar componentes y la capacidad de prueba al permitir la inyección de implementaciones alternativas. Ambos beneficios contribuyen a una arquitectura de software más flexible, mantenible y fácil de probar.

## 10. ¿Por qué es crucial validar los datos de entrada en una aplicación que maneja transacciones financieras?

Validar los datos de entrada en aplicaciones financieras es esencial para garantizar la seguridad, integridad y precisión de las transacciones, cumplir con normativas legales, y ofrecer una experiencia de usuario confiable y satisfactoria.

## 11. ¿Qué podría suceder si un decorador está mal colocado o si no se aplican los pipes correctamente?

Colocar incorrectamente decoradores o aplicar mal los pipes puede llevar a una variedad de problemas, desde errores en la ejecución hasta vulnerabilidades de seguridad y problemas de integridad de datos. Es esencial revisar y probar cuidadosamente la colocación y aplicación de estos elementos para garantizar que la aplicación funcione como se espera y sea segura.

## 12. ¿Cómo impacta el manejo adecuado de excepciones en la experiencia del usuario y en la seguridad de la aplicación?

Un manejo adecuado de excepciones no solo mejora la experiencia del usuario al proporcionar mensajes claros y evitar caídas inesperadas, sino que también refuerza la seguridad al prevenir la exposición de información sensible y proteger contra posibles vulnerabilidades.

## 13. ¿Por qué es importante tener un manejo centralizado de excepciones en una aplicación NestJS?

Tener un manejo centralizado de excepciones en NestJS es esencial para asegurar una experiencia de usuario consistente y profesional, mantener y evolucionar el código de manera efectiva, y mejorar la seguridad de la aplicación. Implementar un filtro de excepciones permite gestionar errores de manera coherente y proporciona un punto centralizado para ajustar cómo se manejan y reportan las excepciones en toda la aplicación.