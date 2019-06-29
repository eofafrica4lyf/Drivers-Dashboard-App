import React from 'react';

function Menu(props) {
  // return <div key="M" id={(props.menu) ? props.menu: "M"} className="menu-item">{props.menu}</div>;
  return (
    <div
      key={props.menu ? props.menu.driverID : 'M'}
      id={props.menu ? props.menu.driverID : 'M'}
      className={props.index === 0 ? 'menu-item active-driver' : 'menu-item'}
      onClick={props.handleClick}
    >
      {props.menu ? props.menu.name : 'M'}
    </div>
  );
}

export default Menu;
