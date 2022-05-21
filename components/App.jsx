import React, { useState } from 'react';
import QuestionBlock from './QuestionBlock.jsx';
import Q from '../data/questions.json';
import '../styles/App.css';

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

//Main app component
function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [qData] = useState(shuffleQuestions(Q));
  return (
    <main>
      <input
        type="text"
        placeholder="Search a keyword to filter topics..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      {qData.filter((val) => {
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