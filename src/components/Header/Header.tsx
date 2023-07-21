import React from 'react';
import './styles/header.css';
import one from './pics/one.png';

function Header(): JSX.Element {
  return (
    <div className="header-div">
      <div className="div-general">
        <img src={one} alt="..." className="logo" />
        <div className="phone-hum">+7(495)-495-49-54</div>
      </div>
    </div>
  );
}

export default Header;
