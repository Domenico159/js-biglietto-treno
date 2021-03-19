

// Function

function Area() {
    var km=parseInt(document.getElementById("km").value);
    var age=parseInt(document.getElementById("age").value);
    var prezzoTotale=km*0.21.toFixed(1);
    var prezzoOver= (prezzoTotale - (prezzoTotale*40)/100).toFixed(2);
    var prezzoUnder=(prezzoTotale - (prezzoTotale*20)/100).toFixed(2);
    
   if(!isNaN(km)){
    if(!isNaN(age)){
        if( (age >= 18) && (age <= 59) ) {
            document.getElementById("prezzo").innerHTML = 'Prezzo: ' + prezzoTotale +'€';
        }
        else if(age <= 17){
            document.getElementById("prezzo").innerHTML = 'Prezzo: ' + prezzoUnder +'€';
        }
        else if(age >= 65){
            document.getElementById("prezzo").innerHTML = 'Prezzo: ' + prezzoOver +'€';
        }
       }else{
        alert('ATTENZIONE! Carattere non corretto , per favore inserire un\'età in formato numerico, grazie.')
       }
    }
    else{
    alert('ATTENZIONE! Carattere non corretto , per favore inserire i chilometri in formato numerico, grazie.')
}
}