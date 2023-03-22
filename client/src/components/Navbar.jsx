import React from "react";

function Navbar() {
  return (
    <div className="App">
      <div className="header">

        <div className="navbar">
          <a className="header-link  current" href="http://localhost:3000/">
            <p>mainpage</p>
          </a>

          <a className="header-link" href="http://localhost:4000/">
            <p>link</p>
          </a>
        </div>


       <div className="authorization">
          <a className="header-link" href="http://localhost:3000/">
            <p>sign in</p>
          </a>

          <a className="header-link" href="http://localhost:3000/">
            <p>sign up</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;