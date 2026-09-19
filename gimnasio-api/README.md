<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Practica 5: 
**1. ¿Qué generó el comando nest new?
Genero el package.json con sus dependencias, el tsconfig.json, y dentro de la carpeta src/ los archivos main.ts, app.module.ts, app.controller.ts, app.service.ts. Genero un servidor mínimo ya funcional, listo para levantarse.

**2. ¿Qué hace el AppService que ya viene generado?

El AppService por defecto solo tiene un método, getHello(), que regresa un mensaje con un Hello World¡

**3. ¿Por qué la ruta funciona sin declarar nada en app.module.ts?

Porque en el módulo no se registran rutas una por una, se registra el controller completo. 

**4. ¿Qué pasaría si el cuerpo de la petición viniera vacío?

Si el cuerpo llega vacío, "cuerpo.nombre" sería undefined. Como no puse ninguna validación Nest no rechaza la petición: igual crea una clase nueva, nada más que con "nombre": undefined, y la agrega al arreglo sin que truene.

**5. ¿En qué archivo vive hoy toda la lógica de la práctica?

Todo está en app.controller.ts, ahí esta la interfaz Clase, el arreglo clases y los dos métodos listar y crear.


## Preguntas Práctica 6.

**1. ¿Qué pasaría si el módulo no quedara registrado en la raíz?** 
Si el InscripcionesModule no queda en el imports del AppModule, Nest no lo detecta, entonces sus rutas dejan de funcionar y su service tampoco se puede inyectar en otro lado.

**2. ¿Por qué los métodos del repositorio devuelven promesas si los datos van a estar en memoria?** 
Los métodos regresan promesas porque el contrato se diseñó pensando en una base de datos real, no solo en el arreglo en memoria. Así, cuando se cambie el repositorio, el Service y el Controller no necesitan ningún cambio.

**3. ¿Qué error apareció al cambiar a la interfaz, y por qué la clase sí se había resuelto sola?** Aparece un error de "Nest no puede resolver las dependencias.", porque las interfaces de TypeScript se borran al compilar a JavaScript y ya no queda nada real que Nest pueda inyectar. La clase sí se resolvía sola porque las clases sí existen como valores reales en el código compilado.

**4. ¿Por qué el servicio necesita un token para el repositorio, pero el controlador no lo necesita para el servicio?** 
El Service necesita un token porque depende de una interfaz, y esa se borra al compilar. El Controller por otro lado inyecta directamente la clase InscripcionesService, que sí existe en tiempo real, por eso no necesita nada extra.

**6. ¿Cuál es la diferencia entre un 400 y un 409?** 
El 400 es cuando la petición viene mal armada o le faltan datos. El 409 es cuando la petición está bien armada pero choca con una regla del negocio, como el cupo lleno o el miembro repetido.

**7. ¿Por qué cambió el código de estado de esa última petición?** 
Al cancelar, la inscripción pasa a estado "cancelada", y las reglas de duplicado y de cupo ignoran las que están canceladas. Eso libera un lugar, y la petición que antes daba 409 ahora sí puede pasar.


## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Observability

In production applications, observability is essential for understanding how your system behaves, detecting issues early, and maintaining reliable performance.

[NestJS Observe](https://observe.nestjs.com) automatically instruments your NestJS application, giving you deep visibility into your system with minimal setup:

- **Distributed tracing:** Follow requests across services and understand how they flow through your system.
- **Waterfall analysis:** Visualize request execution and identify slow operations, bottlenecks, and unexpected delays.
- **Performance analysis:** Analyze application performance in real time and quickly pinpoint areas that need optimization.
- **Metrics:** Track key application and infrastructure metrics to understand system health and performance trends.
- **Logging:** Centralize and correlate logs with traces and other telemetry to make debugging easier.
- **Error tracking:** Detect errors quickly and investigate their root causes with the surrounding context.
- **SLA monitoring:** Track service-level objectives and identify when your application is approaching or exceeding defined thresholds.
- **Alarms and alerts:** Set up alerts for critical errors, performance degradation, SLA violations, and other anomalies so your team can react quickly.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Auto-instrument your application with [NestJS Observer](https://observer.nestjs.com). Distributed tracing, metrics, and logging made easy. Error tracking and performance monitoring for your NestJS applications.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
