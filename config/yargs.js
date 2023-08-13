const argv = require('yargs')
                      .option("b",{ // puede llamarse b (abreviatura) o base como se aclara abajo
                        alias:"base", // el nombre
                        type:"number",
                        demandOption:true, // es requerida si o si
                        describe: "Es la base de la tabla para multiplicar" //una descripcion del argunmento cuando se hace node app --help
                      })
                      .check((argv, options) => { // metodo para verificar 
                        if (isNaN(argv.b)) { // en caso de que la base sea letras
                          throw "La base debe ser un numero" // salta este error
                        }
                        return true // si no retorna true va a dar un error
                      })
                      .option("l",{
                        alias:"lstar",
                        type:"boolean",
                        default: false,
                        describe:"Muestra la tabla en consola"
                      })
                      .argv
module.exports= argv