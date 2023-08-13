// Al ejecutar este archivo se crean archivos de texto con la tabla del numero que se escriba en "base"
const fs = require("node:fs"); // llamamos al file system, el nombre de la constante es indistinto
const colors = require("colors")

const crearArchivo = async (base = 5, listar) => {
  try {
    let salida = "";

    for (let numero = 1; numero <= 10; numero++) {
      const element = numero * base;
      salida += `${numero} x ${base} = ${element}\n`;
    }

    if (listar) {
      console.log(salida.green);
    }

    // 1) nombre del archivo 2) lo que queremos que grabe 3) mensaje de error
    // fs.writeFile(`tabla del ${base}.txt`, salida, (err) => {
    //     if (err) throw err
    //     console.log(`tabla del ${base}.txt creado con exito`);
    // })

    // Lo mismo que writeFile solo que si sucede un error habria que hacerlo mediante un trycatch
    fs.writeFileSync(`./salida/tabla del ${base}.txt`, salida);

    return `tabla del ${base}.txt`;
  } catch (error) {
    throw error;
  }
};

// como exportar nuestra funcion
module.exports = {
  crearArchivo,
};
