import React, { useState, useEffect } from 'react';
import PieChart from './PieChart';
import LineChart from './ColumnChart';

function Charts() {
  let [chartData, setDataChart] = useState([
    [2, 3],
    [10, 16],
    [1000, 500, 500],
  ]);

  useEffect(() => {
    async function getPromises() {
      fetch('/api/stats')
        .then(res => res.json())
        .then(({ data }) => {
          // console.log(data);
          setDataChart([
            [data.male, data.female],
            [data.noOfCashTrips, data.noOfNonCashTrips],
            [data.billedTotal, data.cashBilledTotal, data.nonCashBilledTotal],
          ]);
        })
        .catch(e => console.log({ e }));
    }

    getPromises();
  }, []);

  return (
    <div id="charts">
      <PieChart
        category={['Male', 'Female']}
        data={chartData[0]}
        content="Gender"
      />
      <LineChart data={chartData[2]} content="Billed Total(Cash/Non Cash)" />
      <PieChart
        category={['CashTrips', 'NonCashTrips']}
        data={chartData[1]}
        content="Cash/Non Cash Trips"
      />
    </div>
  );
}

export default Charts;
