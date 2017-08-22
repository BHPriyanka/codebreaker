let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if(answer.value == '' || attempt.value == ''){
       setHiddenFields();
    }

    if(!validateInput(input.value)){
       return false;;
    }
    else {
      attempt.value = parseInt(attempt.value) + 1;
    }
 
    if(getResults(input.value)){
	var msg = "You Win! :)";
        setMessage(msg);
        showAnswer(true);
        showReplay();
    }
    else {
	if(attempt.value >= 10){
	   var lose = "You Lose! :(";
           setMessage(lose);
           showAnswer(false);
           showReplay();
        }
        else{ 
           setMessage("Incorrect, try again.");
        }
    }
}

//implement new functions here
function setHiddenFields() {
    answer.value = Math.floor(Math.random() * 9999) + 0;
    while(answer.value.toString().length < 4){
        var temp = answer.value;
        answer.value = "0" + temp;
    }
    attempt = 0;
}

function setMessage(msg) {
    let message = document.getElementById('message');
    message.innerHTML = msg;
}

function validateInput(input) {
    if(input.length == 4){
        return true;
    }
    else {
	setMessage("Guesses must be exactly 4 characters long.");
        return false;
    }
}
    
function getResults(input){
    var cnt_correct=0;
    input = input.toString();

    var initialDiv = '<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">';
    
    for(var i=0;i<input.length;i++){
        if(input.charAt(i) == ((answer.value).toString()).charAt(i)){
           initialDiv += '<span class="glyphicon glyphicon-ok"></span>';
           cnt_correct++;
        }
        else if((answer.value.indexOf(input.charAt(i))) > -1)
            initialDiv += '<span class="glyphicon glyphicon-transfer"></span>';
        else 
            initialDiv += '<span class="glyphicon glyphicon-remove"></span>';
    }

    initialDiv += '</div></div>';
    document.getElementById('results').innerHTML += initialDiv;
    if(cnt_correct == 4)
        return true;
     else 
	return false;
}


function showAnswer(parameter){
    let code = document.getElementById('code');
    //code.innerHTML = answer;
    if(parameter)
        code.className += ' success';
    else
        code.className += ' failure';
    code.innerHTML = answer.value;
}

function showReplay(){
    let guessing_div = document.getElementById('guessing-div');
    let replay_div = document.getElementById('replay-div');
    guessing_div.style.display = 'none';
    replay_div.style.display = 'block';
}





