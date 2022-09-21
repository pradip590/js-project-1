
var randomNumber1 = Math.floor(Math.random() * 6)+1;

var randomdiceimage1 = "dice" + randomNumber1 + ".png"

var randomimgsrc = randomdiceimage1

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", randomimgsrc);


//image 2

var randomNumber2 = Math.floor(Math.random() * 6)+1; //image 2

var randomdiceimage2 = "dice" + randomNumber2 + ".png"

var randomimgsrc2 = randomdiceimage2

var img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src", randomimgsrc2);
