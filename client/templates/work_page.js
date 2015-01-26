Template.workPage.events({

  "click .section-header-wrapper": function(event) {
    event.preventDefault();
    var $target = $(event.target);
    while (!$target.hasClass("section-header-wrapper")) {
      $target = $target.parent();
    }
    //var $target = $(target);
    console.log($target);
    $target.next().toggleClass("hidden");
  }

});