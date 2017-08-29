var tour;

tour = new Shepherd.Tour({
  defaults: {
    classes: 'shepherd-theme-square-dark',
    scrollTo: true
  }
});

tour.addStep('chat', {
  text: 'No estás solo. Entra en el chat y habla con las otras personas del equipo!',
  attachTo: '#chat bottom',
  advanceOn: '.docs-link click',
  buttons: [
    {
      text: 'Salir',
      action: tour.cancel
    },
    {
      text: 'Siguiente',
      action: tour.next
    }
  ]
});

tour.addStep('blog', {
  text: 'Crea contenidos en el blog!',
  attachTo: '#blog bottom',
  advanceOn: '.docs-link click',
  buttons: [
    {
      text: 'Salir',
      action: tour.cancel
    },
    {
      text: 'Siguiente',
      action: tour.next
    }
  ]
});

tour.addStep('cursos', {
  text: 'Consulta los contenidos disponibles en el MOOC!',
  attachTo: '#cursos bottom',
  advanceOn: '.docs-link click',
  buttons: [
    {
      text: 'Salir',
      action: tour.cancel
    },
    {
      text: 'Siguiente',
      action: tour.next
    }
  ]
});

tour.addStep('canvas', {
  text: 'Participa con tu equipo en una sesión creativa!',
  attachTo: '#canvas bottom',
  advanceOn: '.docs-link click',
  buttons: [
    {
      text: 'Salir',
      action: tour.cancel
    },
    {
      text: 'Siguiente',
      action: tour.next
    }
  ]
});

tour.addStep('proyectos', {
  text: 'Gestiona tus proyectos con metodologías ágiles!',
  attachTo: '#proyectos bottom',
  advanceOn: '.docs-link click',
  buttons: [
    {
      text: 'Salir',
      action: tour.cancel
    },
    {
      text: 'Siguiente',
      action: tour.next
    }
  ]
});

tour.addStep('repositorios', {
  text: 'Crea recetas de tus proyectos y compártelas con la comunidad!',
  attachTo: '#repositorios bottom',
  advanceOn: '.docs-link click',
  buttons: [
    {
      text: 'Salir',
      action: tour.cancel
    },
    {
      text: 'Siguiente',
      action: tour.next
    }
  ]
});


tour.start();
