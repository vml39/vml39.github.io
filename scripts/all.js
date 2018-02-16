$(document).ready(function() {

  var modal = document.getElementById("fun_facts");
  var btn = document.getElementById("facts");
  var span = document.getElementsByClassName("close")[0];

  btn.onclick = function() {
    console.log("clicked");
    modal.style.display = "block";
    // $("#fun_facts").css("display", "block");

  }

  span.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
  }

  // var modal = document.querySelector(".modal");
  // var trigger = document.querySelector(".trigger");
  // var closeButton = document.querySelector(".close-button");

  // function toggleModal() {
  //   console.log("toggle");
  //   modal.classList.toggle("show-modal");
  // }
  //
  // function windowOnClick(event) {
  //   if (event.target === modal) {
  //     toggleModal();
  //   }
  // }
  //
  // trigger.addEventListener("click", toggleModal);
  // closeButton.addEventListener("click", toggleModal);
  // window.addEventListener("click", windowOnClick);

});
