function movie() {
    var genre = document.getElementById("genre").value
    var age = document.getElementById("age").value

    var results;
   if (age=="18+" && genre == "Horror") {
        results = "scream <br> smile <br> Scream 2";
      
    }
     if(age=="0-17" && genre == "Horror"){
      results = "Coraline <br> goosbumps <br> Nightmere before christmas";

    }
    if (age=="18+" && genre == "Romance") {
        results = "50 shades of grey <br> Bluelagoon <br> The Proposal";
        
    }
     if(age=="0-17" && genre == "Romance"){
        results = "Cinderella story <br> My Girl <br> Anyone but you"
     }
    if (age=="18+" && genre == "Comedy") {
        results = "Superbad <br> Hangover <br> Good Boys"
    
    }
     if(age=="0-17" && genre == "Comedy"){
       results = "Shrek <br> Home Alone <br> Elf"
    }

    document.getElementById("output").innerHTML = results;
}
