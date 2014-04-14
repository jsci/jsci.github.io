// global
var Shots;

    

$(function() {


	    function createShot(shot) {
      var title = $("<div>").text(shot.title);
      
      $("#shots").append(title);

      shot.on("click",function() {
        var img = $("<img>").attr("src",shot.image_teaser_url);
        $("#detail").empty().append(img);
      });
    }


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
		      	

		      		//detail
		      		
		    

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


		      		for(var i=0;i<data.shots.length;i++) {
        			createShot(data.shots[i]);      	
      				}

			 


		});



});
