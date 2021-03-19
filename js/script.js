

// Function

function Area() {
    var km=parseInt(document.getElementById("km").value);
    var age=parseInt(document.getElementById("age").value);
    var prezzoTotale= km*0.21 ;
    var prezzoOver= prezzoTotale - (prezzoTotale*40)/100;
    var prezzoUnder=prezzoTotale - (prezzoTotale*20)/100;
    
    if( (age >= 18) && (age <= 59) ) {
        document.getElementById("prezzo").innerHTML = prezzoTotale +'€';
    }
    else if(age <= 17){
        document.getElementById("prezzo").innerHTML = prezzoUnder +'€';
    }
    else if(age >= 60){
        document.getElementById("prezzo").innerHTML = prezzoOver +'€';
    }
}