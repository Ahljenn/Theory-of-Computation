import React, { useState } from 'react';
import '../styles/App.css';
import Q from '../data/questions.json';

function App() {

  const [qData, setQuestion] = useState(Q);
  
  return (
    <main>
        {qData.map((data) => (
          <div class="qa-container">
            <h4 class="question">Q) {data.question}</h4>
            <p class="answer">{data.answer}</p>
          </div>
        ))}
    </main>
  );
}

export default App;