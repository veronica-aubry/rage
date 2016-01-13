$(document).ready(function() {


  $('#capsform').submit(function(event) {

  var lowercaseInput = $("textarea#lowercase").val();
  var uppercaseInput = lowercaseInput.toUpperCase();

    $("body").removeClass();
    $("body").addClass("red");

    $('#uppercase').show();

    $('#exclamation').show();

    $('#uppercase').text(uppercaseInput);

    setTimeout(function() {
      $("body").removeClass("red")
    }, 2000);

    setTimeout(function() {
      $("#exclamation").hide()
    }, 2000);

    setTimeout(function() {
      $("#uppercase").hide()
    }, 2000);


  event.preventDefault();


  });

});
