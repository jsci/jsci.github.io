// global
var Shots;

	
	function showShot (shotIndex) {

       var shot = Shots[shotIndex];
 	   $("#detail").fadeIn("slow");
 	   $("#close").fadeIn("slow");
  	}


  	function hideShot () {
  	   $("#detail").fadeOut("slow");
       $("#close").fadeOut("slow");
    }

    function setDetails (clickedItem) {
    			console.log(clickedItem);
    			var full = $("<div class='postFull'>");
		      	var caption = $("<div class='postCaption'>");

		      	       var shot = Shots[clickedItem];


		      	var fullImg = $("<img class='postFullImg'>").attr("src",shot.image_url);
		      	var create = $("<div class='postCreate'>").text("Date Created: " + shot.created_at);
		      	var views = $("<div class='postViews'>").text("Views: " + shot.views_count);
		      	var likes = $("<div class='postLikes'>").text("Likes: " + shot.likes_count);

    			full.append(fullImg);
		      		full.append(caption)
		      		caption.append(create);
		      		caption.append(views);
		      		caption.append(likes);


		      	$("#detail").empty().append(full);

    }


$(function() {
		//get dribbble object
		$.getJSON("http://api.dribbble.com/shots/popular?callback=?",function(data) {
		      
		      //console.log(data);
		      
		      // cleaned up
		      Shots = data.shots;

		      //for every shot do this...
		      for(var i=0;i<Shots.length;i++) {
		      		//set vars
		      		var shot = Shots[i];
		      		var post = $("<div class='post'>");

		      		var image = $("<img class='postImg'>").attr("src",shot.image_teaser_url)
		      											  .attr("data-shot-index",i);
		      		var title = $("<div class='postTitle'>").text(shot.title);
		      		var name = $("<div class='postName'>").text(shot.player.name);

		      		//append elements to post
		      		post.append(image);
		      		post.append(title);
		      		post.append(name);

		      		//add posts to container
		      		$("#shots").append(post);
		 

		   
			


			$(".postImg").click(function(){
		    var shotIndex = $(this).data("shot-index")
		    showShot(shotIndex);
		    });

			$("#close").click(function(){
    		hideShot();
   		    });

   		    $(".postImg").click(function(){
    			var shotNumber = $(this).data("shot-index");
    			setDetails(shotNumber);
   		    });



   		    }


		});



});
	