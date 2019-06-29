import React from 'react';
// import { useFetchWholeData } from '../../Get/getTrips';
import male from '../../../../img/male.jpg';
import female from '../../../../img/female.jpg';
import CarsNTrips from './CarsNTrips';

function DriverDetail(props) {
  // const [vehicleDetails, setVehicleDetails] = useState([]);
  // console.log(vehicleDetails, vehicleDetails.length);

  return (
    <section id="driverdetail">
      {props.drivers.length === 0 && props.content === 0 ? (
        <p>No data.</p>
      ) : (
        props.drivers.map(driver => {
          // console.log((driver.driverID).toString() === (props.content).toString(), driver[props.content])
          if (props.content) {
            // fetch(`/api/vehicle/${}`)
            // console.log((driver),"ttt",(props.content) )
            if (driver.driverID === props.content.driverID) {
              return (
                <>
                  <div
                    key={driver.driverID}
                    style={{
                      display: 'flex',
                      padding: '4em',
                      justifyContent: 'center',
                      textAlign: 'center',
                    }}
                  >
                    <section id="driver-bio">
                      <div>
                        <img
                          alt={driver.name}
                          src={driver.gender === 'male' ? male : female}
                        />
                        <h1>{driver.name}</h1>
                        <p>
                          <i className="fa fa-envelope" />
                          <br />
                          <em> {driver.email}</em>
                        </p>
                        <p>
                          <i className="fa fa-phone" />
                          <br />
                          <b> {`(${driver.phone})`}</b>
                        </p>
                        <p>
                          <i className="fa fa-home" /> <br />
                          {driver.address}
                        </p>
                        <p>
                          <i className="fa fa-table" /> <br />
                          {new Date(driver.DOB)
                            .toString()
                            .split(' ')
                            .splice(0, 4)
                            .join(' ')}
                        </p>
                        <p style={{ textTransform: 'capitalize' }}>
                          <i className="fa fa-transgender" /> <br />
                          {driver.gender}
                        </p>
                        {/* <p>{driver.agent}</p> */}
                      </div>
                    </section>
                  </div>
                  {<CarsNTrips key={driver.name} data={driver} />}
                </>
              );
            }
          }
          // eslint-disable-next-line
        })
      )}
    </section>
  );
}

export default DriverDetail;
