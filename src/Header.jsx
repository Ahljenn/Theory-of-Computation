import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header>
      
      <h1>Theory of Computation: Review</h1>
      
      <p>Questions from John MacCormick's 
        <a href="https://whatcanbecomputed.com/">
          <i>What Can Be Computed?</i>
        </a>
      </p>
      
      <i class="fa fa-refresh fa-spin fa-3x fa-fw" aria-hidden="true"></i>

    </header>
  );
}

export default Header;