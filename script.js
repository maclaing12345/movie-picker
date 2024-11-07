function movie() {
    var genre = document.getElementById("genre").value;
    var age = document.getElementById("age").value;
var output=document.getElementById("output").value;

    if (age=="18+" && genre == "Horror") {
        output=("Scream")
        console.log("Smile")
        console.log("Scream 2")
    }
    else if(age=="0-17" && genre=="Horror"){
        console.log("Coraline")
        console.log("Goosebumps")
        console.log("Nightmare Before Christmas")
    }
    if (age=="18+" && genre == "Romance") {
        console.log("50 Shades of Gray")
        console.log("Blue Lagoon")
        console.log("The Proposal")
    }
    if (age=="0-17" && genre == "Romance") {
        console.log("Cinderella Story")
        console.log("My Girl")
        console.log("Anyone But You")
    }
    if (age=="18+" && genre == "Comedy") {
        console.log("Superbad")
        console.log("Good Boys")
        console.log("Hangover")
    }
    if (age=="0-17" && genre == "Comedy") {
        console.log("Shrek")
        console.log("Home Alone")
        console.log("Elf")
    }
}