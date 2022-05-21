import React, { useState } from 'react';
import QuestionBlock from './QuestionBlock.jsx';
import Q from '../data/questions.json';
import '../styles/App.css';

//Main app component
function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [qData] = useState(Q);
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