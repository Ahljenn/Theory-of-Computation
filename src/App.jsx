import React from 'react';
import '../styles/App.css';

function App() {
  return (
    <main>
      <div class="qa-container">
        
        <h4 class="question">Q) What is a regular language?</h4>
        <p class="answer">A language is regular iff it is decided by some DFA. A language is regular if it's decided by some NFA, or represented by some regular expression</p>
        
      </div>
    </main>
  );
}

export default App;