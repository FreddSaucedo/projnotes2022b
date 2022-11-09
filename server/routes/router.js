// Importamos los tramos de rutas
import homeRouter from '../home/homeRouter';

// Funcion de enrrutado
const addRoutes = (app) => {
  // Agregando enrrutado de Home
  app.use('/', homeRouter);
};

export default { addRoutes };
