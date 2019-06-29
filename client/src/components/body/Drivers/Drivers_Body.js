import React, { useState, useEffect } from 'react';
import Aside from '../Drivers/Aside/Aside';
import DriverDetail from '../Drivers/DriverDetail/DriverDetail';
import { useFetchWholeData } from '../../Get/getTrips';

function Drivers_Body() {
  let [content, setContent] = useState([]);
  // let [detail, setDetail] = useState('Detail');
  // let [target, setTarget] = useState(undefined);
  let [drivers] = useFetchWholeData('/api/drivers');

  useEffect(() => {
    setContent(drivers[0]);
  }, [drivers]);

  const handleClick = e => {
    // console.log('Driver Clicked!');
    // console.log(e.target.classList);
    let menuElements = document.querySelectorAll('.menu-item');
    drivers.map((driver, index) => {
      menuElements[index].classList.remove('active-driver');
      if (driver.driverID === e.target.id) {
        menuElements[index].classList.add('active-driver');
        setContent(driver);
        // console.log(e.target.classList);
      }
      return driver;
    });
  };

  return (
    <div id="drivers">
      <main id="main">
        <Aside driv={drivers} handleClick={handleClick} />
        {/* <SentryBoundary> */}
        {drivers[0] && <DriverDetail content={content} drivers={drivers} />}
        {/* </SentryBoundary> */}
      </main>
    </div>
  );
}
// console.log();
/////////////////////////////////////////////////////////////////////////
// class SentryBoundary extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   static getDerivedStateFromError(error) {
//     // Update state so the next render will show the fallback UI.
//     return { hasError: true };
//   }

//   componentDidCatch(error, info) {
//     // You can also log the error to an error reporting service
//     console.error(error, info);
//   }

//   render() {
//     if (this.state.hasError) {
//       // You can render any custom fallback UI
//       return <h1>Something went wrong.</h1>;
//     }

//     return this.props.children;
//   }
// }

export default Drivers_Body;
