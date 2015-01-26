Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/business', {
  name: 'businessPage',
  template: 'businessPage'
});

Router.route('/', {
  name: 'home',
  template: 'landingPage'
});