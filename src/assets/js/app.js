import '../scss/main.scss';

const modules = import.meta.glob('./*.js');

Promise.all(Object.values(modules).map(module => module()))

  .then(loadedModules => {
    loadedModules.forEach(module => {
      if (module.default) {
        module.default();
      }
    });
  })
  .catch(error => {
    console.error('Error loading modules:', error);
  });
