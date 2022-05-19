import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header>
      
      <h1>Theory of Computation: Review</h1>
      
      <p>Questions from John MacCormick's 
        <b><i> What Can Be Computed?</i></b>
      </p>
      <p><i>Computability & Complexity</i></p>
      
      <button title="Shuffle questions">
        <i class="fa fa-refresh fa-spin fa-3x fa-fw" aria-hidden="true"></i>
      </button>

    </header>
  );
}

export default Header;