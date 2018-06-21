//set up counter timer
var counter = 0;
var timeleft = 95;


    var stopwatch = {
        start: function() {
            $(document).ready(function() {
                $("#remaining-time").hide();
                $("#timer").on("click", stopwatch.recordLap);
                $("#start").on("click", stopwatch.start);
                $("#submit").on("click", stopwatch.stop);
            });
            
            // $("#display").text("01:35");
            // $("#timer").text(""); 
        }
    }

//the timer starts as soon as the page loads
// window.onload = function() {
//     $("#timer").on("click", stopwatch.recordLap);
//     $("#start").on("click", stopwatch.start);
//     $("#submit").on("click", stopwatch.stop);
// };

// $("#display").text("01:35");
// $("#timer").text("");

// var intervalId;
// var clockRunning = false;

// var stopwatch = {
//     time: 0,
//     lap: 1,

//     reset: function() {
//         stopwatch.time = 0;
//         stopwatch.lap = 1;

//         $("#display").text("01:35");
//         $("#timer").text("");
//     },
//     start: function() {
//         if (!clockRunning) {
//             intervalId = setInterval(stopwatch.count, 1000);
//             clockRunning = true;
//         }
//     },
//     stop: function() {
//         clearInterval(intervalId);
//         clockRunning = false;
//     },
//     recordLap: function() {
//         var converted = stopwatch.timeConverter(stopwatch.time);

//     }
// }


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

//set up submitAnswers function

var quiz = {
    correct: 0,
    incorrect: 0,
    unanswered: 0,
    total: 6,
    score: 0,
    timer: 95,
    timerOn: false,
    timerId: '',
}


    function submitAnswers() {
        // var total = 6;
        // var score = 0;

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

  
    

        //Display results on separate page
        $("#results").html("<h4>Results!</h4>" + 
        "<p>Correct: "+ quiz.correct +"</p>" +
        "<p>Incorrect: "+ quiz.incorrect +"</p>" +
        "<p>Unanswered: "+ quiz.unanswered +"</p>");

        //hide game section
        $("#game").hide();
        //show start button to begin a new game
        $("#start").show();
    }

    

