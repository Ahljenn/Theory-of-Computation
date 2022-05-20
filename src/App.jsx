import React, { useState } from 'react';
import '../styles/App.css';
import Q from '../data/questions.json';

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
      }).map((val, key) => {
          return (
            <div class="qa-container">
              <h4 class="question">{val.question}</h4>
              <p class="answer">{val.answer}</p>
            </div>
          );
      })}
    </main>
  );
}

export default App;