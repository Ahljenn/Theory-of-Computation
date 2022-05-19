import React, { useState } from 'react';
import '../styles/App.css';
import Q from '../data/questions.json';

function App() {

  const [qData] = useState(Q);
  
  return (
    <main>
        {qData.map((data) => (
          <div class="qa-container">
            <h4 class="question">{data.question}</h4>
            <p class="answer">{data.answer}</p>
          </div>
        ))}
    </main>
  );
}

export default App;