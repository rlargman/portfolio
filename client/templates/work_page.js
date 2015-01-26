Template.workPage.events({

  "click .section-header-wrapper": function(event) {
    event.preventDefault();
    var $target = $(event.target);
    while (!$target.hasClass("section-header-wrapper")) {
      $target = $target.parent();
    }

    $target.next().toggleClass("hidden");
  }

});

