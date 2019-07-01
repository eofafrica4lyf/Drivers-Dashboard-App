import React, { useState, useEffect } from 'react';
import { useFetchWholeData } from '../../Get/getTrips';
import { IntersectingCirclesSpinner } from 'react-epic-spinners';
import male from '../../../img/male.jpg';
import female from '../../../img/female.jpg';

function TripDetail_Body(props) {
  let [tripData, setTripData] = useState(props.match.params.tripID);
  let [trip] = useFetchWholeData(`/api/trip/${props.match.params.tripID}`);
  console.log(tripData);

  useEffect(() => {
    async function fetchTrip() {
      console.log(trip);

      const tripResponse = await fetch(`/api/driver/${trip.driverID}`);
      const response = await tripResponse.json();
      console.log(tripResponse, response, trip);
      setTripData({ ...trip, driver: response.data });
      // return response.data;
    }
    fetchTrip();
    console.log(trip, tripData);
  }, [trip, setTripData]);

  // const driverResponse = useFetchWholeData(`/api/trip/${tripResponse.driverID}`)

  return (
    <>
      <h1 style={{ textAlign: 'center', marginBottom: '0em' }}>
        Trip Summary Details
      </h1>
      <section style={{ backgroundColor: '#17202e', padding: '1em 16em 4em' }}>
        {tripData.driver ? (
          <>
            <img
              style={{
                textAlign: 'center',
                width: '13%',
                borderRadius: '50%',
                display: 'block',
                margin: '1em auto',
              }}
              src={tripData.driver.gender === 'male' ? male : female}
            />
            <section
              style={{
                backgroundColor: '#202a36',
                padding: '2em',
                borderRadius: '5px',
              }}
            >
              <div
                style={{
                  textAlign: 'center',
                  padding: '2em',
                  border: '1px solid #ffffff59',
                  borderRadius: '5px',
                }}
                id="trip-detail"
              >
                <p>
                  <span id="driver-names">{tripData.driver.name} </span> was
                  driven by <span id="driver-names">{tripData.user.name}</span>
                </p>
                <p>
                  <b>Billed Amount: </b> {tripData.billedAmount}
                </p>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    padding: '2em 14em',
                  }}
                >
                  <p>
                    <b>from</b> {tripData.pickup.address}
                  </p>
                  <p>
                    <b>to</b> {tripData.destination.address}
                  </p>
                </div>
              </div>

              <div
                id="people"
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <div
                  style={{
                    backgroundColor: '#17202e',
                    flex: '1 0 0',
                    padding: '2em',
                    margin: '2em 2em auto auto',
                    borderRadius: '5px',
                  }}
                  id="user"
                >
                  <div style={{ margin: 'auto' }}>
                    <div style={{ margin: 'auto' }}>
                      <h2>Passenger Detail</h2>
                      <p>
                        <b>Name: </b> {tripData.user.name}
                      </p>
                      <p>
                        <b>Email: </b> {tripData.user.email}
                      </p>
                      <p>
                        <b>Phone: </b> {tripData.user.phone}
                      </p>
                      <p>
                        <b>Gender: </b> {tripData.user.gender}
                      </p>
                      <p>
                        <b>Company: </b> {tripData.user.company}
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    backgroundColor: '#17202e',
                    flex: '1 0 0',
                    padding: '2em',
                    margin: '2em auto auto 2em',
                    borderRadius: '5px',
                  }}
                  id="driver"
                >
                  <div style={{ margin: 'auto' }}>
                    <div style={{ margin: 'auto' }}>
                      <h2>Driver Details</h2>
                      <p>
                        <b>Name: </b> {tripData.driver.name}
                      </p>
                      <p>
                        <b>Email: </b> {tripData.driver.email}
                      </p>
                      <p>
                        <b>Phone: </b> {tripData.driver.phone}
                      </p>
                      <p>
                        <b>DOB: </b>{' '}
                        {new Date(tripData.driver.dob)
                          .toString()
                          .split(' ')
                          .splice(0, 4)
                          .join(' ')}
                      </p>
                      <p>
                        <b>Address: </b> {tripData.driver.address}
                      </p>
                      <p>
                        <b>Gender: </b> {tripData.driver.gender}
                      </p>
                      <p>
                        <b>Agent: </b> {tripData.driver.agent}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        ) : (
          <IntersectingCirclesSpinner
            color="white"
            style={{ display: 'relative', top: '50%', left: '50%' }}
          />
        )}
      </section>
    </>
  );
}

export default TripDetail_Body;
