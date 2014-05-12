function renderMap(data){
        console.log(data)
        data = data.filter(function(d) {
                return d.location && d.latitude;
            })

        data = data.slice(10);

        //tooltop hover
        var div = d3.select("body").append("div")
        .attr("class", "tooltop")
        .style("opacity", 0);
        var width = 960,
        height = 960;
        var projection = d3.geo.mercator()
        .scale((width + 1) / 2 / Math.PI)
        .translate([width / 2, height / 2])
        .precision(.1);

        //svg element
        var svg = d3.select("#container")
          .append("svg")
          .attr ("class", "main")
          .attr("width", 1020)
          .attr("height", 900);
        var color = d3.scale.linear()
       
        var circle = svg.selectAll ("circle")
               .data(data)
               .enter()
               .append("circle")
               .attr ("transform", function(d) {
                  return "translate("+projection([d.longitude,d.latitude]) + ")" 
                })
               .attr("r", function(d) { 
                    return d.shots_count > 100 ? 11 :
                           d.shots_count > 50 ? 8 :
                           d.shots_count > 20 ? 5 :
                           2 
               })
               .on ("mouseover", function(d) {
                    div.transition()
                        .duration(200)
                        .style("opacity", 1);
                    div.html(d.username + "<br/>" + d.location + "<br/><br/>" + d.shots_count +" shots posted" + "<br/>" + "with " + d.likes_received_count + " likes" )
               .style("left",(d3.event.pageX) + "px")
               .style("top", (d3.event.pageY - 100) + "px");
               })
               .on ("mouseout", function(d) {
                        div.transition()
                        .duration(500)
                        .style ("opacity", 0);
               })
               .style("fill", function(d) {
                     return d.likes_received_count > 50000 ? "rgba(255,255,255,0.75)" : 
                     d.likes_received_count > 10000 ? "rgba(255,255,255,0.5)" :
                     d.likes_received_count > 5000 ? "rgba(255,255,255,0.25)" :
               "rgba(255,255,255,0.1)"
               });




};


