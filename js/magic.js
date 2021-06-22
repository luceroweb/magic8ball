const questionForm = document.createElement('form'),
      questionLabel = document.createElement('label'),
      questionInput = document.createElement('input'),
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
      ];

// Question Form Setup
questionLabel.innerHTML = 'Ask me anything!<br>';
questionSubmitButton.innerText = 'Ask';

// Magic 8 Ball Answers Setup
answerImage.src = 'img/magic8ball_start.png';
answerImage.alt = '';


// Layout Setup
questionForm.appendChild(questionLabel);
questionLabel.appendChild(questionInput);
questionForm.appendChild(questionSubmitButton);
document.body.appendChild(questionForm);
document.body.appendChild(questionParagraph);
answers.appendChild(answerImage);
document.body.appendChild(answers);

function ask(e){
  e.preventDefault();
  if(questionInput.value === '') {
    alert('You must first ask a question');
    return;
  }
  questionParagraph.innerText = questionInput.value;
  console.log(questionParagraph);
  questionForm.style.display = 'none';
  let answerImageIndex = Math.floor(Math.random()*20);
  answerImage.src = 'img/'+answerList[answerImageIndex];
}

questionForm.addEventListener('submit', function(e){ask(e)});