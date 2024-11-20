import React, { useState } from "react";

export default function Header() {

  const [isMessageVisible, setIsMessageVisible] = useState(false);

  function handleButton(){
    setIsMessageVisible(!isMessageVisible);
  }

  return (
    <header>
      <img src="./src/assets/logo.svg" alt="logo" className="logo" />
      <nav className="menu">
        <li>
          <a href="#advantages">Advantages</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#prices">Price</a>
        </li>
        <li>
          <a href="#feedbacks">Feedbacks</a>
        </li>
        <li>
          <a href="#footer">Contacts</a>
        </li>
      </nav>
      <button className="btn" onClick={handleButton}>Get free lesson</button>

      {isMessageVisible && (
        <div className="overlay">
          <div className="message">
            Call us at: <strong>+38 000 000 00 00</strong> <br/>to book your <span className="free">free</span> lesson!
          </div>
        </div>
      )}
    </header>
  );
}
