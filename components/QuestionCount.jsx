import React from 'react';

function NoCount(props){
  return(
    <div class="question-count-container">
      <p>Number of questions:</p>
      <p class="count-none">{props.count}</p>
    </div>
  )
}

function WithCount(props){
  return(
    <div class="question-count-container">
      <p>Number of questions:</p>
      <p class="count">{props.count}</p>
    </div>
  )
}

function QuestionCount(props){
    {if(props.count == 0){
    return(
        <NoCount count={props.count} />
    )} else {
      return(
        <WithCount count={props.count} />
      )
    }}
}

export default QuestionCount;