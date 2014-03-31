// Write our base functions

function showProduct (collection) {
       $(".overlay").fadeIn("slow");
       $(".details").fadeIn("slow");
        var clothing = Collections[collection];

       $("#collection-title").text(clothing.name);
       $("#detail-title").text(clothing.title);
       $("#detail-description").text(clothing.description);
       $("#detail-price").text("$" + clothing.price);
       $("#detail-type").text(clothing.type);
       $("#main-item").attr("src", clothing.image);
     }

function hideProduct () {
       $(".overlay").fadeOut("slow");
       $(".details").fadeOut("slow");
   }




// When the page loads, add in our event handlers
$(function() {

   $(".product").click(function(){
    var collection = $(this).data("product-id")
    showProduct(collection);
   });

    $(".overlay").click(function(){
    hideProduct();
   });



});


