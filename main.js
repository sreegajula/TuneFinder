var rocksongs = ["Queen - Bohemian Rhapsody", "Led Zeppelin - Stairway To Heaven", "Led Zeppelin - Whole Lotta Love", "Pink Floyd - Confortably Numb"];
var rapsongs = ["Drake - God's Plan", "Eminem - Lose Yourself", "Mobb Deep - Shook Ones", "Dr.Dre - The Next Episode"];
var popsongs = ["Ed Sheeran - Bad Habits", "Justin Bieber - STAY", "Adele - Easy On Me", "BTS - Dynamite"];
var jazzsongs = ["Miles Davis - So What", "Billie Holiday - Strange Fruit", "Dave Brubeck - Take Five", "Herbie Hancock - Chamelion"];
var electronicsongs = ["DJ Snake - Lean On", "Disclosure - Latch", "Bastille - Happier", "Zedd - Clarity"];
var rnbsongs = ["SZA - I Hate U", "Ginuwine - Pony", "The Weeknd - Out of Time", "Cardi B - Bitter"];


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

var g = document.getElementById("genres");
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

function refreshCanvas(){
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.font = "20px Arial";
    songnum = getRandomInt(4);

    if(g.value == "Rock"){
        var text = rocksongs[songnum];
    }
    if(g.value == "Rap"){
        var text = rapsongs[songnum];
    }
    if(g.value == "Pop"){
        var text = popsongs[songnum];
    }
    if(g.value == "Jazz"){
        var text = jazzsongs[songnum];
    }
    if(g.value == "Electronic"){
        var text = electronicsongs[songnum];
    }
    if(g.value == "R&B"){
        var text = rnbsongs[songnum];
    }

    ctx.fillText(text, 10, 50);
}

button.addEventListener("click", function(){refreshCanvas();});