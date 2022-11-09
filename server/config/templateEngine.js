import exphbs from 'express-handlebars';
import path from 'path';

// app: Instancia de express
// Configurar el motor de plantillas de express
// usando express-handlebars
// 1. Registrar el motor de plantillas
export default (app) => {
  app.engine(
    'hbs',
    exphbs({
      extname: '.hbs',
      defaultLayout: 'main',
    })
  );

  // 2. Seleccionar motor de plantillas
  app.set('view engine', 'hbs');

  // 3. Establecer la ruta de las vistas
  app.set('views', path.join(__dirname, '..', 'views'));

  // 4. Retornar la instancia de express
  return app;
};
