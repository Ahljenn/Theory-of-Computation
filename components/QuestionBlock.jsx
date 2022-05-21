import React from 'react';

//Component that renders a question block
function QuestionBlock(props){
  return (
    <div class="qa-container">
      <h4 class="question">{props.item.question}</h4>
      <p class="answer">{props.item.answer}</p>
    </div>
  )
}

export default QuestionBlock;