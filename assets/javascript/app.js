//set up counter timer
var counter = 0;
var timeleft = 30;

function convertSeconds(s) {
    var min = floor(s / 60);
    var sec = s % 60;
    return nf(min,2) + ':' + nf(sec,2);
}

function setup() {
    noCanvas(); 

    var timer = select('#timer');
    timer.html(convertSeconds(timeleft - counter));

    function timeIt() {
        counter--;
        timer.html(convertSeconds(timeleft - counter));
    }

    setInterval(timeIt, 1000);
}

//set up start button
//questions
//set up Finish button
//directs to the results page