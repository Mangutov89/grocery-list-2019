$(document).ready(function() {
  var lists = [];
  $("#add").click(function() {
    if ($("#ans1").val().length > 1) {
    lists.push($("#ans1").val());
    $("#ans1").val("");
    }

  });

  $("#formOne").submit(function(event) {
    lists.sort();
    lists.forEach(function(list) {
      $("ul").append("<li>" + list + "</li>");
    });

    event.preventDefault();
  });
});
