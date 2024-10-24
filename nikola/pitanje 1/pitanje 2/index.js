alert("Nice one, it wasn't that hard.")
alert("Good luck")
alert("Koristi internet")
function potvrdi(){
    
        let unos = document.getElementById("unos").value
        
        if(unos === "44.98387"){
            alert("Nice one, I think it wasn't that hard....");
            window.location.href = 'pitanje 3/index.html';
        }else{
            alert("---Try again---")
            window.location.href =  'index.html';
        }
    }