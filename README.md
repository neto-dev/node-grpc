# Implementación basica de gRPC + Node.js + MongoDB

Ejemplo basico del intento de implementar clean architecture en un servidor node.

El ejemplo cuenta con archivos de configuración para bases de datos basado en el entorno que se este ejecutando.

Tecnologias implementadas:

- Node.js
- Babel
- Consign
- gRpc
- Waterline

El actual ejemplo cuenta con una implementación básica de los métodos **Get/GetByID/Create/Update/Delete** con la tecnología gRPC, en la carpeta Raíz se encuentra el código del cliente temporal para realizar pruebas.

Primero tendrás que clonar el repositorio a tu computadora con el siguiente comando.

`git clone https://github.com/neto-dev/node-grpc.git`

Una vez descargado ingresar a la carpeta.

`cd node-grpc`

Después instalar las dependencias.

`npm i`

En este punto ya tenemos todo listo. Antes de ejecutar el servidor hay que asegurarnos de que tenemos instalado y corriendo MongoDB ya que el proyecto esta configurado para funcionar con MongoDB.

Ya corriendo MongoDB podemos ejecutar el servidor.

`npm run dev`

Para hacer las pruebas de los diferentes métodos ejecutar el siguiente comando.

`node client_tmp.js`

Después seguir las instrucciones.

Es una implementación básica con la cual podrán desarrollar sus servidores o para basarse según sea el caso. 
