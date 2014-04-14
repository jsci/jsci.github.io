// global
var Shots;


	function showShot (shotIndex) {
       var shot = Shots[shotIndex];
 	   $("#detail").fadeIn("slow");
 	   $("#close").fadeIn("slow");
  	}


  	function hideShot () {
       $("#close").fadeOut("slow");
       $("#detail").fadeOut("slow");

    }


$(function() {


		$.getJSON("http://api.dribbble.com/shots/popular?callback=?",function(data) {
		      
		      console.log(data);
		      
		      // cleaned up
		      Shots = data.shots;


		      for(var i=0;i<Shots.length;i++) {
		      		var shot = Shots[i];
		      		var post = $("<div class='post'>");

		      		var image = $("<img class='postImg'>").attr("src",shot.image_teaser_url)
		      											  .attr("data-shot-index",i);
		      		var title = $("<div class='postTitle'>").text(shot.title);
		      		var name = $("<div class='postName'>").text(shot.player.name);

		      		post.append(image);
		      		post.append(title);
		      		post.append(name);

		      		$("#shots").append(post);
		      	}

		      		//detail
		      		
		      for(var i=0;i<Shots.length;i++) {

		      		var full = $("<div class='postFull'>");
		      		var caption = $("<div class='postCaption'>");

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


			$(".postImg").click(function(){
		    var shotIndex = $(this).data("shot-index")
		    showShot(shotIndex);
		    });

			$("#close").click(function(){
    		hideShot();
   		    });


		});



});
