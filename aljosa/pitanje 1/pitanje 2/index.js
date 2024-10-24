alert("Nice one, it wasn't that hard.")
alert("Good luck")
console.log("store,shopping")
function potvrdi(){
    
        let unos = document.getElementById("unos").value
        
        if(unos === "17.91126"){
            alert("Nice one, I think it wasn't that hard....");
            window.location.href = 'pitanje 2/index.html';
        }else{
            alert("---Try again---")
            window.location.href =  'index.html';
        }
    
}