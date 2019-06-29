import React, { useState, useEffect } from 'react';
import { useFetchWholeData } from '../../Get/getTrips';

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
    <section style={{ backgroundColor: '#17202e', padding: '4em' }}>
      <div id="trip-detail">Trip Detail</div>

      <section style={{ backgroundColor: '#202a36' }}>
        <div
          id="trip-detail"
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <div id="main-trip-details">
            <p>{tripData.billedAmount}</p>
            <p>{tripData.created}</p>
          </div>
          <div id="people">
            <div id="user" />
            <div id="driver" />
          </div>
        </div>
      </section>
    </section>
  );
}

export default TripDetail_Body;
