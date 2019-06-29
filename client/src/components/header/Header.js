import React from 'react';

function Header() {
  return (
    <nav id="header">
      <h1 style={{ textAlign: 'center', color: 'white' }}>
        <a style={{ textDecoration: 'none', color: 'white' }} href="/">
          React Dashboard App
        </a>
      </h1>
    </nav>
  );
}

export default Header;
