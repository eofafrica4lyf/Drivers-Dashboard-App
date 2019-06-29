import React, { useState, useEffect } from 'react';
import { useFetchWholeData } from '../../../../Get/getTrips';
import { Link } from 'react-router-dom';
// import { useGetDrivers } from '../../../Get/getDriver'
// import '@fortawesome/fontawesome-free/css/fontawesome.css'

function Table() {
  let [trips, setTrips] = useState([]);
  let [gettrips, loading] = useFetchWholeData('/api/trips');

  useEffect(() => {
    const promises = gettrips.map(trip => {
      return fetch(`/api/driver/${trip.driverID}`)
        .then(res => res.json())
        .then(res => ({ ...trip, driverDetails: res.data }))
        .catch(e => console.log({ e }));
    });

    async function getPromises() {
      await Promise.all(promises).then(res => setTrips(res));
    }

    getPromises();
  }, [gettrips]);

  console.log(trips);

  return (
    <>
      {/* {JSON.stringify(trips)}; */}
      <div id="table">
        <h1>Trip Records</h1>
        {loading ? (
          'Loading...'
        ) : (
          <table className="TFtable">
            <thead>
              <tr>
                <th />
                <th>User</th>
                <th>Driver</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {trips.map(row => {
                return (
                  <tr key={row.user.name}>
                    <td style={{ textAlign: 'center' }}>
                      <Link to="drivers">
                        <i className="fa fa-info-circle" />
                      </Link>
                    </td>
                    <td>{row.user.name}</td>
                    <td>{row.driverDetails ? row.driverDetails.name : ''}</td>
                    <td>{row.billedAmount}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

export default Table;
