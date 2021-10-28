let timer = [08, 23, 55, 41];

$(document).ready(function () {
    countdown();
});

function countdown() {
    timer[3] -= 1;
    $("#seconds .card-behind span").text(timer[3]);
    $("#seconds .card-top").addClass("animate-flip-top");
    $("#seconds .card-bottom").addClass("animate-flip-bottom");
    if (timer[3] < 0) {
        timer[3] = 59;
        timer[2] -= 1;
        $("#seconds .card-behind span").text(timer[2]);
        $("#minutes .card-top").addClass("animate-flip-top");
        $("#minutes .card-bottom").addClass("animate-flip-bottom");
    }
    if (timer[2] < 0) {
        timer[2] = 59;
        timer[1] -= 1;
        $("#seconds .card-behind span").text(timer[1]);
        $("#hours .card-top").addClass("animate-flip-top");
        $("#hours .card-bottom").addClass("animate-flip-bottom");
    }
    if (timer[1] < 0) {
        timer[1] = 23;
        timer[0] -= 1;
        $("#seconds .card-behind span").text(timer[0]);
        $("#days .card-top").addClass("animate-flip-top");
        $("#days .card-bottom").addClass("animate-flip-bottom");
    }
    if (timer[0] === 0) {
        return;
    }
    setTimeout(() => {
        $("#seconds .card-top span").text(timer[3]);
        $("#minutes .card-top span").text(timer[2]);
        $("#hours .card-top span").text(timer[1]);
        $("#days .card-top span").text(timer[0]);
        $("#seconds .card-bottom span").text(timer[3]);
        $("#minutes .card-bottom span").text(timer[2]);
        $("#hours .card-bottom span").text(timer[1]);
        $("#days .card-bottom span").text(timer[0]);
        $(".card-top").removeClass("animate-flip-top");
    }, 200)
    setTimeout(() => {
        $(".card-bottom").removeClass("animate-flip-bottom");
        $("#seconds .card-behind-bottom span").text(timer[3]);
        $("#minutes .card-behind-bottom span").text(timer[3]);
        $("#hours .card-behind-bottom span").text(timer[3]);
        $("#days .card-behind-bottom span").text(timer[3]);
    }, 400)
    setTimeout(() => {
        countdown();
    }, 1000);
}