//set up counter timer
var counter = 0;
var timeleft = 95;

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
//set up submitAnswers function
function submitAnswers() {
    var total = 6;
    var score = 0;

    //get user input
    var q1 = document.forms["quizForm"]["q1"].value;
    var q2 = document.forms["quizForm"]["q2"].value;
    var q3 = document.forms["quizForm"]["q3"].value;
    var q4 = document.forms["quizForm"]["q4"].value;
    var q5 = document.forms["quizForm"]["q5"].value;
    var q6 = document.forms["quizForm"]["q6"].value;

    //validation
    
    for(i = 1; i <= total; i++) {
        if(eval('q'+i) == null || eval('q'+i) == '') {
            alert('You missed question '+ i);
            return false;
        }
    }

//set right answers
    var answers = ["b", "a", "a", "c", "c", "a"];

//check the answers
    for(i = 1; i <= total; i++) {
        if(eval('q'+i) == answers[i - 1]) {
            score++;
        }
    }

    //Display results
    var results = document.getElementById('results');
    results.innerHTML = '<h3>You scored <span>' + score + '</span> out of <span>' + total + '</span></h3>';
    
    return false;
    
}

//set up Finish button
//directs to the results page