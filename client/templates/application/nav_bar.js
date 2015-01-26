Template.navBar.events({

  "click .work-link": function(event) {
    event.preventDefault();
    $("body").css("background-image", 'none');
    $(".nav-bar-wrapper a").removeClass("dark-background");    
    Router.go('workPage');
  },

  "click .about-me-link": function(event) {
    event.preventDefault();   
    Router.go('home');    
  }

});