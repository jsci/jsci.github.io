// base functions

function showProject (portfolio) {
       $(".overlay").fadeIn("slow");
       $(".details").fadeIn("slow");
        var project = Portfolio[portfolio];


       $("#detail-title").text(project.title);
       $("#detail-date").text(project.date);
       $("#detail-description").text(project.description);
       $("#detail-image").attr("src", project.image);
  }


function hideProject () {
       $(".overlay").fadeOut("slow");
       $(".details").fadeOut("slow");
   }



// When the page loads, add in our event handlers
$(function() {

   $(".detail-image").click(function(){
    var portfolio = $(this).data("project-id")
    showProject(portfolio);
   });

    $(".overlay").click(function(){
    hideProject();
   });


});






// Navigation Auto Hide on Scroll



