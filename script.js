function movie(age, genre) {
    //var genre = document.getElementById("genre").value
    //var age = document.getElementById("age").value
    console.log(age);
    console.log(genre);
    //the results variable records the output
    //Each of the if statements decide the output based on the input
    var results;
    if (age=="Age" || genre=="Genre"){
        results=""
    }
   if (age>18 && genre == "Horror") {
        results = "scream <br> smile <br> Scream 2";
      
    }
     if(age<18 && genre == "Horror"){
      results = "Coraline <br> goosbumps <br> Nightmere before christmas";

    }
    if (age>18 && genre == "Romance") {
        results = "50 shades of grey <br> Bluelagoon <br> The Proposal";
        
    }
     if(age<18 && genre == "Romance"){
        results = "Cinderella story <br> My Girl <br> Anyone but you"
     }
    if (age>18 && genre == "Comedy") {
        results = "Superbad <br> Hangover <br> Good Boys"
    
    }
     if(age<18 && genre == "Comedy"){
       results = "Shrek <br> Home Alone <br> Elf"
    }

 return results   

}
//this function uses the results saved from the first function and displays them
function updateScreen(){
    document.getElementById("output").innerHTML = movie(document.getElementById("age").value, document.getElementById("genre").value);
}

