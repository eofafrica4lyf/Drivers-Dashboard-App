import React from 'react';
import Menu from '../Aside/Menu';

function Aside(props) {
  // console.log(props);
  return (
    <aside>
      {props.driv.map((driver, index) => {
        return (
          <>
            <Menu
              key={driver.driverID}
              index={index}
              menu={driver}
              handleClick={props.handleClick}
            />
          </>
        );
      })}
    </aside>
  );
}

export default Aside;
