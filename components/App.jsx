import React, { useState, useEffect} from 'react';
import QuestionBlock from './QuestionBlock.jsx';
import Q from '../data/questions.json';
import '../styles/App.css';

//https://react-bootstrap.github.io/getting-started/introduction/

//Shuffle questions each visit
function shuffleQuestions(arr){
  let i = arr.length - 1;
  for(; i > 0; --i){
    const j = Math.floor(Math.random() * (i + 1));
    const tempArr = arr[i];
    arr[i] = arr[j];
    arr[j] = tempArr;
  }
  return arr;
}

function App() {
  const [searchTerm, setSearchTerm] = useState(""); //Set initial state of search to be nothing (no search yet)
  const [questionData, setQuestionData] = useState(Q);
  const [text, setText] = useState("");
  
  function handleShuffle(){
    //todo: Clear value field for search bar
    setQuestionData(shuffleQuestions(questionData)); 
    setText(""); //Resets the input field on shuffle
    setSearchTerm(searchTerm == "" ? " " : ""); //Set search term to either empty string or space depending on current value to re-render the page
  }

  function handleText(){
    setSearchTerm(event.target.value); 
    setText(event.target.value); //Allows text to reset on button click (shuffle)
  }
  
  return (
    <main>
      <div class="interactions">
        <button 
          class="shuffle-button" 
          title="Shuffle questions"
          onClick={handleShuffle}
        >
          <i class="fa fa-refresh fa-spin fa-3x fa-fw" aria-hidden="true"></i>
        </button>
        
        <input
          type="text"
          value={text}
          placeholder="Search a keyword to filter topics..."
          onChange={handleText}
        />
      </div>
      {questionData.filter((val) => { //Filter JSON data first before mapping
        if (searchTerm == ""){
          return val;
        } else if (val.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                   val.answer.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val;
        }
      }).map((val) => {
          return (
            <QuestionBlock item={val} />
          );
      })}
    </main>
  );
}

export default App;