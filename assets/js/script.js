$(document).ready(function(){
  
    $("#fa-logo1").click(function () {
      $("#p-lorem1").toggle(100);
    });
  
    $("#fa-logo2").click(function () {
      $("#p-lorem2").toggle(100);
    });
  
    $("#fa-logo3").click(function () {
      $("#p-lorem3").toggle(100);
    });
    
  
    });




// tooltips js para realizar la animación

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})