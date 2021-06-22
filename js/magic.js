const questionForm = document.createElement('form'),
      questionLabel = document.createElement('label'),
      questionInput = document.createElement('input'),
      displayQuestionDiv = document.createElement('div'),
      questionParagraph = document.createElement('p'),
      questionSubmitButton = document.createElement('button'),
      answers = document.createElement('div'),
      answerImage = document.createElement('img'),
      answerList = [
        'magic8ball_1.png',
        'magic8ball_2.png',
        'magic8ball_3.png',
        'magic8ball_4.png',
        'magic8ball_5.png',
        'magic8ball_6.png',
        'magic8ball_7.png',
        'magic8ball_8.png',
        'magic8ball_9.png',
        'magic8ball_10.png',
        'magic8ball_11.png',
        'magic8ball_12.png',
        'magic8ball_13.png',
        'magic8ball_14.png',
        'magic8ball_15.png',
        'magic8ball_16.png',
        'magic8ball_17.png',
        'magic8ball_18.png',
        'magic8ball_19.png',
        'magic8ball_20.png',
      ],
      askAgainButton = document.createElement('button');

// Question Form Setup
questionLabel.innerHTML = 'Ask me anything!<br>';
questionSubmitButton.innerText = 'Ask';

// Magic 8 Ball Answers Setup
answerImage.src = 'img/magic8ball_start.png';
answerImage.alt = '';
displayQuestionDiv.style.display = 'none';
askAgainButton.innerText = 'Ask Another Question';


// Layout Setup
questionForm.appendChild(questionLabel);
questionLabel.appendChild(questionInput);
questionForm.appendChild(questionSubmitButton);
document.body.appendChild(questionForm);
displayQuestionDiv.appendChild(questionParagraph);
displayQuestionDiv.appendChild(askAgainButton);
document.body.appendChild(displayQuestionDiv);
answers.appendChild(answerImage);
document.body.appendChild(answers);

function ask(e){
  e.preventDefault();
  if(questionInput.value === '') {
    alert('You must first ask a question');
    return;
  }
  questionParagraph.innerText = questionInput.value;
  questionForm.style.display = 'none';
  displayQuestionDiv.style.display = 'block';
  answerImage.classList.add("fade");
  setTimeout(function(){
    let answerImageIndex = Math.floor(Math.random()*20);
    answerImage.src = 'img/'+answerList[answerImageIndex];
    answerImage.classList.remove("fade");
  }, 1000);
}

questionForm.addEventListener('submit', function(e){ask(e)});


askAgainButton.addEventListener('click', function(){
  questionForm.style.display = 'block';
  displayQuestionDiv.style.display = 'none';
  answerImage.classList.add("fade");
  setTimeout(function(){
    answerImage.src = 'img/magic8ball_start.png';
    answerImage.classList.remove("fade");
  }, 1000);
});