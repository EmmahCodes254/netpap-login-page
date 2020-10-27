function openMonetize(evt, monetizeName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(monetizeName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  // Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

$(document).ready(function(){
  interval(function() {
    $.ajax({url:"https://netpap.co.ke/api/public/landingstats/",
    method:"GET",
    dataType:"json",
}).done(function(data){

$("#hotspot").html(data['hostspot']);
$("#users").html(data['users']);
$("#transactions").html(data['transactions']);
$("#fixed").html(data['fixed'])
}).error(function(e){});

}, 60 * 1000); // 60 * 1000 milsec

 
})