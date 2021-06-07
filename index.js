var arr = document.getElementsByTagName("img");
var txt = document.querySelector("span");
var rand1 = Math.floor(Math.random() * 6) + 1;
var rand2 = Math.floor(Math.random() * 6) + 1;
var str1 = rand1 + ".png";
var str2 = rand2 + ".png";
arr[0].setAttribute("src", str1);
arr[1].setAttribute("src", str2);
if (rand1 > rand2) {
    txt.textContent = "Player1 wins.";
} else if (rand1 < rand2) {
    txt.textContent = "Player2 wins.";
} else {
    txt.textContent = "Draw.";
}
