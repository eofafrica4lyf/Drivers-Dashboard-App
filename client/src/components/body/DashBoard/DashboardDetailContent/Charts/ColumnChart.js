import React from 'react';
import { ColumnChart } from 'react-chartkick';
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
      <ColumnChart
        id="users-chart"
        width="300px"
        height="300px"
        data={[
          ['Billed Total', props.data[0]],
          ['No of Cash Trips', props.data[1]],
          ['No of Non Cash Trips', props.data[2]],
        ]}
      />
    </div>
  );
}

export default Chart;
