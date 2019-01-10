# Implementacion basica de gRPC + Node.js + MongoDB

Ejemplo basico del intento de implementar clean architecture en un servidor node.

El ejemplo cuenta con archivos de configuracion para bases de datos basado en el entorno que se este ejecutando.

Tecnologias implementadas:

- Node.js
- Babel
- Consign
- gRpc
- Waterline

El actual ejemplo cuenta con una implementacion basica de los metodos **Get/GetByID/Create/Update/Delete** con la tecnologia gRPC, en la carpeta de **src/presentation/handler** se encuentra el codigo del cliente temporal para realizar pruebas.

Primero tendras que clonar el repositorio a tu computadora con el siguiente comando.

`git clone https://github.com/neto-dev/node-grpc.git`

Una vez descargado ingresar a la carpeta.

`cd node-grpc`

Despues instalar las dependencias.

`npm i`

En este punto ya tenemos todo listo. Antes de ejecutar el servidor hay que asegurarnos de que tenemos instalado y corriendo MongoDB ya que el proyecto esta configurado para funcionar con MongoDB.

Ya corriendo MongoDB podemos ejecutar el servidor.

`npm run dev`

Para hacer las pruebas de los diferentes metodos ejecutar el siguiente comando.

`node client_tmp.js`

Despues seguir las instrucciones.

Es una implementacion basica con la cual podran desarrollar sus servidores o para basarse segun sea el caso. 
