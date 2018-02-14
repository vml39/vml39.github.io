$(document).ready(function() {

  $("#contact").on("submit", function() {
    // assume the form is valid, unless we find an invalid field
    formValid = true;

    emailIsValid = $("#email").prop("validity").valid;
    if(emailIsValid) {
     $("#emailError").hide();
    } else {
     $("#emailError").show();
     formValid = false;
    }

    return formValid;

  });

});
