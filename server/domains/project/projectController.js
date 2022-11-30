// Creando los Actions Methods
// del controlador Project

// GET "/project"
// GET "/project/list"
const list = (req, res) => {
  // 1. Generando el view-model
  const viewModel = {};
  // 2. Madamos a generar la vista con el Template Engine
  res.render('project/list', viewModel);
};

// GET "/project/add"
// GET "/project/create"
const showAddProjectForm = (req, res) => {
  const viewModel = {};
  res.render('project/add', viewModel);
};

// POST "/project/add"
// POST "/project/create"
const addProject = (req, res) => {
  // Rescatando la info del formulario
  const { validData, errorData: error } = req;
  let project = {};
  let errorModel = {};
  // Desesctructurando y renombrando error de datos
  // Verificando si hay error de validación
  if (error) {
    // Rescartar los datos del formulario
    project = error.value;
    // Quiero generar un objeto que contenga
    // Los campos con error y sus errores
    errorModel = error.inner.reduce((prev, curr) => {
      // Variable temporal donde se guarda el elemento anterior
      const newVal = prev;
      newVal[`${curr.path}Error`] = curr.message;
      return newVal;
    }, {});
  } else {
    // Desestructurando datos del formulario
    project = validData; // Contestando los datos del proyecti
  }
  res.status(200).render('project/add', { project, errorModel });
};

// Exportando el Controlador
export default { list, showAddProjectForm, addProject };
