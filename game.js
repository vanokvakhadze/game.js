var buttonColours = [ "red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;
$(".btn").on("click", function(){
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor)

    
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length -1 );
});



function nextSequence(){
    userClickedPattern = [];
    var randomNumber = Math.floor(Math.random() *4);
    randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour); 
    $("#level-title").text("Level " + level);
    level++;
    
}

function playSound(name){

    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentcolor){
    $("#" + currentcolor).addClass("pressed");
    setTimeout(function(){
        $("#" + currentcolor).removeClass("pressed");

    }, 100);
}


$("body").keypress(function(){
    if(!started){ 
   level++;
   $("#level-title").text("Level " + level);
   nextSequence();
   started=true;
   }
});

function checkAnswer (currentlevel){
   
   
        if(gamePattern[currentlevel] === userClickedPattern[currentlevel])
                {  if(gamePattern.length ===  userClickedPattern.length)
                    {setTimeout(nextSequence(),1000);
                    }
            
    
    }

    else{
       var audio = new Audio('./sounds/wrong.mp3');
       audio.play();
       $("body").addClass("game-over");
       setTimeout(function(){
        $("body").removeClass("game-over")},200);
       $("h1").text("Game Over, Press Any Key to Restart");
        startover();   
    }
}

function startover(){
   
    started = false;
    level = 0;
    gamePattern=[];
    
    

}