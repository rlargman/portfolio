Template.navBar.events({

  "click .skills-link": function(event) {
    event.preventDefault();
    $("body").css("background-image", 'none');
    $(".nav-bar-wrapper a").removeClass("dark-background");    
    Router.go('businessPage');
  },

  "click .about-me-link": function(event) {
    event.preventDefault();   
    Router.go('home');    
  }

});