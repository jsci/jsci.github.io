$(function() {



      for(var i=0;i<data.length;i++) {

      var person = $("<div class='person'>");
      var salary = parseFloat(data[i][18]);
      var barVal = salary / 1000;

      var name = $("<div class='name'>").text(data[i][8]);
      var salaryDiv = $("<div class='salary'>").text("$" + data[i][18]);


      person.append(name);
      person.append(salaryDiv);

      $("#row").append(person);


      salaryDiv.css("width", barVal);

      } 


});