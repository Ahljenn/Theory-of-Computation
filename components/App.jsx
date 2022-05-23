import React, { useState, useEffect } from 'react';
import QuestionBlock from './QuestionBlock.jsx';
import QuestionCount from './QuestionCount.jsx';
import Q from '../data/questions.json';
import '../styles/App.css';

//Shuffle questions each visit
function shuffleQuestions(arr) {
  let i = arr.length - 1;
  for (; i > 0; --i) {
    const j = Math.floor(Math.random() * (i + 1));
    const tempArr = arr[i];
    arr[i] = arr[j];
    arr[j] = tempArr;
  }
  return arr;
}

function App() {
  const [questionData, setQuestionData] = useState(Q); //Question data
  const [searchTerm, setSearchTerm] = useState(""); //Search value
  const [text, setText] = useState(""); //Search field text
  const [numberQuestions, setQuestionCount] = useState(questionData.length); //Question count display
  let counter = 0;

  useEffect(() => {
    setQuestionCount(counter);
    console.log("Rendering question/answer sets...");
  }, [searchTerm]);

  function handleShuffle() {
    setQuestionData(shuffleQuestions(questionData));
    setText(""); //Resets the input field on shuffle
    setSearchTerm(searchTerm == "" ? " " : ""); //Set search term to either empty string or space depending on current value to re-render the component
  }

  function handleText() {
    setSearchTerm(event.target.value);
    setText(event.target.value); //Allows text to reset on button click (shuffle)
  }

  return (
    <main>

      <QuestionCount count={numberQuestions} />

      <div class="interactions">
        <button
          class="shuffle-button"
          title="Shuffle questions"
          onClick={handleShuffle}
        >
          <i class="fa fa-refresh fa-spin fa-3x fa-fw spinny" aria-hidden="true"></i>
        </button>

        <input
          type="text"
          value={text}
          placeholder="Search a keyword to filter topics..."
          onChange={handleText}
        />
      </div>
      {questionData.filter((val) => {
        if (searchTerm == "") {
          return val;
        } else if (val.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          val.answer.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val;
        }
      }).map((val) => {
        counter++; //Used for # questions display
        return (
          <QuestionBlock item={val} />
        );
      })}
    </main>
  );
}

export default App;