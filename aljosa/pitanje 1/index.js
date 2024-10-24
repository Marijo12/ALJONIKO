alert("Hello Aljosa, I want to play a game.")
alert("In front of you is game where u have to use communication with your frined Nikola to win this game. :D ");
alert("...Good luck my frineds...");
alert("You have to make a deal, just one of u can use internet but when I say that. So make a deal...")
console.log("Year is important too.");

function potvrdi(){
    let unos = document.getElementById("unos").value

    if(unos === "2023"){
        alert("Nice one, I think it wasn't that hard....");
        window.location.href = 'pitanje 2/index.html';
    }else{
        alert("---Try again---")
        window.location.href =  'index.html';
    }
}