/*
// Codigo ES6
// Default Parameters
let show = (msg="No message given") => {
  console.log(msg)
}
show();

// Async Await
function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000)
  });
}

async function asyncCall() {
  console.log("Calling");
  const result = await resolveAfter2Seconds();
  console.log(result);
}

asyncCall();
*/
// Cargando estilos
import './stylesheet/style.css';
import './stylesheet/myStyles.css';
// Importando Materialize CSS
import 'materialize-css/dist/css/materialize.css';
// Importando scripts de Materialize
import 'materialize-css/dist/js/materialize';

// Inicializando Scripts de MAterialize para interactividad
M.AutoInit();

console.log('Webpack-MIDDLEWARE Working!!! 📦');
