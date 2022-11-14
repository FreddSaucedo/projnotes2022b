// Creando los Actions Methods
// GET "/"
// GET "/index"
const home = (req, res) => {
  // 1. Generando el view-model
  const viewModel = {
    title: 'Express',
    author: 'Alfredo Saucedo',
  };

  // 2. Madamos a generar la vista con el Template Engine
  res.render('home', viewModel);
};

const about = (req, res) => {
  // 1. Generando el view-model
  const viewModel = {};

  // 2. Madamos a generar la vista con el Template Engine
  res.render('about', viewModel);
};

// Exportando el Controlador
export default { home, about };
