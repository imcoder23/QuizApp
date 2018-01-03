var currentQuestion=0;
var score=0;
var totalQues=questions.length;

var container = document.getElementById('quizContainer');
var questionAr = document.getElementById('question');
var resultCont = document.getElementById('result');

function loadQuestion(questionIndex ) {
  var q=questions[questionIndex]
  questionAr.textContent = (questionIndex + 1) + '. ' + q.question;
	opt1.textContent = q.option1;
	opt2.textContent = q.option2;
	opt3.textContent = q.option3;
	opt4.textContent = q.option4;
};

function loadNextQuestion () {
	var selectedOption = document.querySelector('input[type=radio]:checked');
	if(!selectedOption){
		alert('Please select your answer!');
		return;
	}
	var answer = selectedOption.value;
	if(questions[currentQuestion].answer == answer){
		score += 10;
	}
	selectedOption.checked = false;
	currentQuestion++;
	if(currentQuestion == totalQues - 1){
		nextButton.textContent = 'Finish';
	}
	if(currentQuestion == totalQues){
		container.style.display = 'none';
		resultCont.style.display = '';
		resultCont.textContent = 'Your Score: ' + score;
		return;
	}
	loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion);
