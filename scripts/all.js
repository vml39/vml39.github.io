$(document).ready(function() {

  // Could use PHP to make this easier to code

  /** Fun Facts */
  var fun_facts_btn = document.getElementById("facts");
  var fun_facts = document.getElementById("fun_facts");
  var fun_facts_span = document.getElementsByClassName("close")[0];

  /** Fun Facts */

  fun_facts_btn.onclick = function() {
    fun_facts.style.display = "block";
  }

  fun_facts_span.onclick = function() {
    fun_facts.style.display = "none";
  }

  /** Spaceship Rescue */
  var a8_btn = document.getElementById("a8_btn");
  var a8 = document.getElementById("a8");
  var a8_span = document.getElementsByClassName("close")[1];

  a8_btn.onclick = function() {
    a8.style.display = "block";
  }

  a8_span.onclick = function() {
    a8.style.display = "none";
  }

  /** GUI */
  var gui_btn = document.getElementById("gui_btn");
  var gui = document.getElementById("gui");
  var gui_span = document.getElementsByClassName("close")[2];

  gui_btn.onclick = function() {
    gui.style.display = "block";
  }

  gui_span.onclick = function() {
    gui.style.display = "none";
  }

  /** Tetris */
  var tetris_btn = document.getElementById("tetris_btn");
  var tetris = document.getElementById("tetris");
  var tetris_span = document.getElementsByClassName("close")[3];

  tetris_btn.onclick = function() {
    tetris.style.display = "block";
  }

  tetris_span.onclick = function() {
    tetris.style.display = "none";
  }

  /** Applefest */
  var applefest_btn = document.getElementById("applefest_btn");
  var applefest = document.getElementById("applefest");
  var applefest_span = document.getElementsByClassName("close")[4];

  applefest_btn.onclick = function() {
    applefest.style.display = "block";
  }

  applefest_span.onclick = function() {
    applefest.style.display = "none";
  }

  /** Hearsay */
  var hearsay_btn = document.getElementById("hearsay_btn");
  var hearsay = document.getElementById("hearsay");
  var hearsay_span = document.getElementsByClassName("close")[5];

  hearsay_btn.onclick = function() {
    hearsay.style.display = "block";
  }

  hearsay_span.onclick = function() {
    hearsay.style.display = "none";
  }

  /** CUSD */
  var cusdhub_btn = document.getElementById("cusdhub_btn");
  var cusdhub = document.getElementById("cusdhub");
  var cusdhub_span = document.getElementsByClassName("close")[6];

  cusdhub_btn.onclick = function() {
    cusdhub.style.display = "block";
  }

  cusdhub_span.onclick = function() {
    cusdhub.style.display = "none";
  }

  /** All */
  window.onclick = function(event) {
    if (event.target == fun_facts || event.target == a8 || event.target == gui || event.target == tetris || event.target == applefest || event.target == hearsay || event.target == cusdhub) {
        fun_facts.style.display = "none";
        a8.style.display = "none";
        gui.style.display = "none";
        tetris.style.display = "none";
        applefest.style.display = "none";
        hearsay.style.display = "none";
        cusdhub.style.display = "none";
    }
  }

});
