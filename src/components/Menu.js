import React from 'react';

function Menu (props) {
    let toggleClass = props.isToggle ? "menu-button change" : "menu-button";
    return (
      <button className={ toggleClass } aria-pressed={props.isToggle} aria-label="Toggle Menu" onClick={() => {props.onMenuClick()}}>
        <div className="menu-bar1"></div>
        <div className="menu-bar2"></div>
        <div className="menu-bar3"></div>
      </button>);
}

export default Menu
