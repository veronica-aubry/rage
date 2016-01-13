$(document).ready(function() {

  $('#capsform').submit(function(event) {

  var lowercaseInput = $("textarea#lowercase").val();
  var uppercaseInput = lowercaseInput.toUpperCase();

    $("body").removeClass();
    $("body").addClass("red");

    $('#exclamation').show();

    $('#uppercase').text(uppercaseInput);


  event.preventDefault();

  });

});
