import React from 'react';
import { PieChart } from 'react-chartkick';
import 'chart.js';

function Chart(props) {
  return (
    <div>
      <h3 style={{ marginBottom: '3em' }}>
        {props.content}
        <span
          style={{
            backgroundColor: '#23c6c8',
            float: 'right',
            fontSize: '0.9em',
            padding: '7px',
            borderRadius: '5px',
          }}
        >
          Monthly
        </span>
      </h3>
      {/* <p>{props.content}</p> */}
      <PieChart
        id="users-chart"
        width="300px"
        height="300px"
        data={[
          [props.category[0], props.data[0]],
          [props.category[1], props.data[1]],
        ]}
      />
    </div>
  );
}

export default Chart;
