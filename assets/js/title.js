if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function () {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function () {
        loaded();
    });
}
function loaded() {
    setInterval(loop, 450);
}
var x = 0;
var titleText = ["G", "Go", "Gol", "Gold", "GoldT", "GoldTe", "GoldTec", "GoldTec I", "GoldTec In", "GoldTec Ind", "GoldTec Inde", "GoldTec Index"];
function loop() {
    document.getElementsByTagName("title")[0].innerHTML = titleText[x++ % titleText.length];
}
