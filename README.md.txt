1. ¿Qué generó el comando nest new?

Genero el package.json con sus dependencias, el tsconfig.json, y dentro de la carpeta src/ los archivos main.ts, 
app.module.ts, app.controller.ts, app.service.ts. Genero un servidor mínimo ya funcional, listo para levantarse.

2. ¿Qué hace el AppService que ya viene generado?

El AppService por defecto solo tiene un método, getHello(), que regresa un mensaje con un Hello World¡

3. ¿Por qué la ruta funciona sin declarar nada en app.module.ts?

Porque en el módulo no se registran rutas una por una, se registra el controller completo. 

4. ¿Qué pasaría si el cuerpo de la petición viniera vacío?

Si el cuerpo llega vacío, "cuerpo.nombre" sería undefined. Como no puse ninguna validación Nest no rechaza la petición: 
igual crea una clase nueva, nada más que con "nombre": undefined, y la agrega al arreglo sin que truene.

5. ¿En qué archivo vive hoy toda la lógica de la práctica?

Todo está en app.controller.ts, ahí esta la interfaz Clase, el arreglo clases y los dos métodos listar y crear.
