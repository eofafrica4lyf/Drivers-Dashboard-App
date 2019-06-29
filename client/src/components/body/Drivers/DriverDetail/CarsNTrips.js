import React, { useState, useEffect } from 'react';

function CarsNTrips(props) {
  const [vehicles, setVehicles] = useState(props.data.vehicleID);
  // console.log(vehicles)

  useEffect(() => {
    const promises = vehicles.map(vehicle => {
      return fetch(`/api/vehicle/${vehicle}`)
        .then(res => res.json())
        .then(res => {
          // console.log(res.data);
          return res.data;
        });
    });
    // console.log(promises);
    async function getPromises() {
      await Promise.all(promises).then(res => setVehicles(res));
    }
    getPromises();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div
        style={{
          display: 'flex',
          padding: '4em',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <section id="driver-bio">
          <div>
            <h1>Cars and Trips</h1>
            {/* {console.log(props.data)} */}
            {/* <h1>{props.data.vehicleID} </h1> */}
            <h4>Number of Vehicles: {vehicles.length} </h4>
            <div style={{ display: 'flex' }}>
              {vehicles.map(vehicle => (
                <div
                  id={vehicle.vehicleID}
                  key={vehicle.vehicleID}
                  style={{
                    backgroundColor: '#17202e',
                    border: 'none',
                    borderRadius: '5px',
                    flex: '1 0 0',
                    maxWidth: '45%',
                    margin: '1em auto',
                  }}
                >
                  <p>
                    <b>Vehicle Manufacturer:</b> <br />
                    <em> {vehicle.manufacturer}</em>
                  </p>
                  <p>
                    <b>Vehicle Plate Number:</b> <br />
                    <em> {vehicle.plate}</em>
                  </p>
                  <p>
                    <b>Was vehicle acquired new?</b> <br />
                    <em>
                      {' '}
                      {new Date(vehicle.acquiredNew)
                        .toString()
                        .split(' ')
                        .splice(0, 4)
                        .join(' ')}
                    </em>
                  </p>
                </div>
              ))}
            </div>

            {/* <p><i className="fa fa-envelope" /><br/><em> {props.data.email}</em></p>
              <p><i className="fa fa-phone" /><br/><b> {`(${props.data.phone})`}</b></p> */}
          </div>
        </section>
      </div>
    </div>
  );
}

export default CarsNTrips;
