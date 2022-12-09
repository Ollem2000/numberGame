var sctHome = document.querySelector("#sctHome");
	sctHome.style.display = "display";
	//sctHome.style.display = "none";
var sctGame = document.querySelector("#sctGame");
	//sctGame.style.display = "display";
	sctGame.style.display = "none";
var sctEnd = document.querySelector("#sctEnd");
	sctEnd.style.display = "none";

var questionDisplay = document.querySelector("#questionDisplay");
var answerInput = document.querySelector("#answerInput");

var questionPassed = document.querySelector("#questionPassed");
var questionList = document.querySelector("#questionList");
	
var message = document.querySelector("#message");
var mssEnd = document.querySelector("#mssEnd");

var bbtRestart = document.querySelector("#bttRestart");

var num1
var num2
var oper
var result

function funStart()
{
	sctHome.style.display = "none";
	sctEnd.style.display = "none";
	funGame()
}

function funQuestion()
{
	num1 = Math.floor(Math.random() * 100)
	num2 = Math.floor(Math.random() * 100)
	oper = "+"
	result = num1 + num2
	
	questionDisplay.innerHTML = num1 +" "+ oper +" "+ num2;
}

function funGame()
{

	var playsLimit = 10
	var plays = 0
	var color
	var score = 0

	sctGame.style.display = "flex";
	questionPassed.innerHTML = "RUN";
	questionList.innerHTML = "";
	answerInput.placeholder = "type in";

	window.addEventListener('keydown', (e) =>
	{
		if(plays == playsLimit)
		{
			console.log("fim de jogo");
			mssEnd.innerHTML = "Fim de jogo!";
			
			sctGame.style.display = "none";
			sctEnd.style.display = "flex";
			
			questionList.innerHTML += "<br/><span id='alert'> &#9744; "+playsLimit+"</span><span id='correct'> &#9745; "+score+"</span><span id='incorrect'> &#9746; "+(playsLimit-score)+"</span>";

			plays = 0
			score = 0
		}
		else if(plays < playsLimit)
		{
			if(e.key == "Enter" && answerInput.value !== "")
				{
				if(answerInput.value == result)
				{
					console.log("correto");
					color = "correct";
					score++
				}
				else
				{
					console.log("incorreto");
					color = "incorrect";
				}
				questionPassed.innerHTML = "<span id='"+color+"'>"+num1+" "+oper+" "+num2+" = "+result+"</span>";
				questionPassed.style.translate = "";
				
				questionList.innerHTML += "<span id='"+color+"'>"+num1+" "+oper+" "+num2+" = "+result+"</span><br/>";
				
				plays++
				console.log("r: "+result+" a: "+answerInput.value);
				console.log("plays: "+plays+" score: "+score);
				funQuestion();
				answerInput.placeholder = "";
				answerInput.value = "";
			}
		}
		else
		{
			answerInput.placeholder = "NaN";
		}
		answerInput.focus()
	})

	funQuestion()
}