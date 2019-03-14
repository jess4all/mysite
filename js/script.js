"use strict";

//Toggle navbar on hover:

$(document).ready(function(){
  //
  $("#productDropdown").mouseover(function(){
    $("#productDropdown .dropdown-toggle").dropdown('show');
  });
  $("#productDropdown").mouseout(function(){
    $("#productDropdown .dropdown-toggle").dropdown('hide');
  });

  $("#catalogDropdown").mouseover(function(){
    $("#catalogDropdown .dropdown-toggle").dropdown('show');
  });
  $("#catalogDropdown").mouseout(function(){
    $("#catalogDropdown .dropdown-toggle").dropdown('hide');
  });

  $("#faqDropdown").mouseover(function(){
    $("#faqDropdown .dropdown-toggle").dropdown('show');
  });
  $("#faqDropdown").mouseout(function(){
    $("#faqDropdown .dropdown-toggle").dropdown('hide');
  });

  // $("#logInDropdown").mouseover(function(){
  //   $("#logInDropdown .dropdown-toggle").dropdown('show');
  // });
  // $("#logInDropdown").mouseout(function(){
  //   $("#logInDropdown .dropdown-toggle").dropdown('hide');
  // });

  //hide search toggle
  $("#collapseSearchToggle").click(function(){
    // document.getElementById("test2").focus();
    $("#collapseSearchToggle").hide();
    function myScript() {
      document.getElementById("test2").focus();
    }
    var myElement = document.getElementById("collapseSearch");
    myElement.addEventListener("webkitTransitionEnd", myScript);  // Code for Safari 3.1 to 6.0
    myElement.addEventListener("transitionend", myScript);        // Standard syntax

  });
  $("#test2").blur(function(){
    $("#collapseSearch").collapse('hide');
    $("#collapseSearchToggle").show();
  });



// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();







});
