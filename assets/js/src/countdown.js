var countDownSince = document.getElementsByClassName("countdown_since");
var countDownDate = new Date(countDownSince);

var x = setInterval(function() {

    var now = new Date();

    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));

    document.getElementsByClassName("countdown_remain")[0].innerHTML = days + "일 ";
}, 1000);