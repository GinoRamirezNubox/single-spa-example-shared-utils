# single-spa example: shared utils

En este ejemplo, se muestra cómo usar un módulo de utilidades que comparte el estado de la aplicación en múltiples aplicaciones single-spa y múltiples frameworks.

Esto consiste en:

- suma-pyme-root: aplicacion raiz que orquesta microfrontend
- suma-navbar: barra de navegacion en react
- suma-home: contenido principal en react
- suma-auth-utils: modulo de utilidades, compartido por todos los componentes anteriores

### Configuracion

> ⚠️ Estos proyectos estan configurados con [yarn](https://yarnpkg.com/) para las acciones de traspilar o comenzar.

### Ejecucion local

- ejecutar `yarn start` en cada directorio de aplicacion
  - suma-pyme-root corre en puerto 9000
  - suma-navbar corre en puerto 4201 (`yarn start --port 4201`)
  - suma-home corre en puerto 5001 (`yarn start --port 4202`)
  - suma-auth-utils corre en puerto 9001 (`yarn start --port 4203`)
- ir a http://localhost:9000/
- Celebrar 🎉

### Modulo de Utilidad?

[Los modulos de utilidades tienen un monton de casos de uso](https://single-spa.js.org/docs/recommended-setup/#utility-modules-styleguide-api-etc), en esta PoC la usamos para pensar en la autenticacion, estos ademas son importantes para [Compartir logica comun](https://single-spa.js.org/docs/module-types/#utility-modules-share-common-logic) en un solo lugar centralizado.
