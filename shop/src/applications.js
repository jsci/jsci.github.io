// Write our base functions

function checkOut() {

  var stripeKey = 'pk_test_V0SJ6QOh3rXO9s6Ysw0eHzzE';

  var description = $("#cart").text();
  var amount = updateCart() * 100;

  var handler = StripeCheckout.configure({
    key: stripeKey,
    image: 'http://jsci.github.io/shop/images/scissors.png',
    token: function(token, args) {
      
    }
  });

  handler.open({
    name: 'Studio',
    description: description,
    amount: amount
  });

}


function showProduct (collection) {
       $(".overlay").fadeIn("slow");
       $(".details").fadeIn("slow");
        var clothing = Collections[collection];

       $("#collection-title").text(clothing.name);
       $("#detail-title").text(clothing.title);
       $("#detail-description").text(clothing.description);
       $("#detail-price").text("$" + clothing.price);
       $("#detail-type").text(clothing.type);
       $("#detail-image").attr("src", clothing.image);


       $("#add-to-cart").on("click",function(){
          var quantity = parseInt ($("#detail-quantity").val());
          addItem(collection,quantity)
       });
  }


function hideProduct () {
       $(".overlay").fadeOut("slow");
       $(".details").fadeOut("slow");
       $("#add-to-cart").off("click");
   }

var cart = {};


function addItem (collection,quantity) {
          if(!cart[collection]) { cart[collection] = 0; }
      cart[collection] += quantity;
      updateCart()

}


function updateCart (){
  var total = 0;

      for(var collection in cart) {
          var quantity = cart[collection];
          var clothing = Collections[collection];
          var price = clothing.price;
          var itemPrice = clothing.price*quantity;
          total += itemPrice;
      }

      $("#cart").text("Cart" + "($" + total.toFixed(2) + ")");
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

    $("#cart").click(function() {
    checkOut();
  });

});



