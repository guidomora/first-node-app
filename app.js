const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs")
const colors = require("colors")

// argv es la propiedad que sirve para tomar lo que se escribe en la terminal


crearArchivo(argv.b, argv.l)
  .then((nombreArchivo) => console.log(nombreArchivo.rainbow, "creado"))
  .catch((err) => console.log(err));

