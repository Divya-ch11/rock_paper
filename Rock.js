function final(){

    computer = ["rock","paper","scissor"][Math.floor(Math.random() * 3)];
    document.getElementById("a").innerHTML= "computer choice:" + computer;

    var your =prompt("Enter your Choice");
    document.getElementById("b").innerHTML= "Your choice:" + your;

    function result(c,y){

        if (y=="rock" || y=="paper" || y=="scissor"){

            if ((c=="rock" && y=="rock") || (c=="paper" && y=="paper") || (c=="scissor" && y=="scissor")) {
                document.getElementById("select").innerHTML = "Tied";
            } else if (c=="rock" && y=="paper"){
                document.getElementById("select").innerHTML ="You Won";
            } else if (c=="rock" && y=="scissor"){
                document.getElementById("select").innerHTML ="Computer Won";
            } else if (c=="paper" && y=="rock"){
                document.getElementById("select").innerHTML ="Computer Won";
            } else if (c=="paper" && y=="scissor"){
                document.getElementById("select").innerHTML ="You Won";
            } else if (c=="scissor" && y=="rock"){
                document.getElementById("select").innerHTML ="You Won";
            } else // (c=="scissor" && y=="paper") 
                document.getElementById("select").innerHTML ="Computer Won";

        } else
        alert("Enter proper word");   
    }
    result(computer,your);

}
