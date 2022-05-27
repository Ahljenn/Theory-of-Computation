import React from 'react';

function NoCount(props) {
  return (
    <div class="question-count-container">
      <p>Number of {props.type}:</p>
      <p class="count-none">{props.count}</p>
    </div>
  )
}

function WithCount(props) {
  return (
    <div class="question-count-container">
      <p>Number of {props.type}:</p>
      <p class="count">{props.count}</p>
    </div>
  )
}

function QuestionCount(props) {
  {
    if (props.count == 0) {
      return (
        <NoCount 
        count={props.count}
        type={props.type}
        />
      )
    } else {
      return (
        <WithCount 
        count={props.count} 
        type={props.type}
        />
      )
    }
  }
}

export default QuestionCount;