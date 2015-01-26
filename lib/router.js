Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/work', {
  name: 'workPage',
  template: 'workPage'
});

Router.route('/', {
  name: 'home',
  template: 'landingPage'
});