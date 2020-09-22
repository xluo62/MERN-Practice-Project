import React from 'react';

export default function PrograssBar({ atPercent }) {
  const containerBar = {
    width: 100,
    borderRadius: 50,
    height: 30,
    backgroundColor: 'red',
    margin: '0 auto',
  };
  const percentBar = {
    borderRadius: 50,
    width: `${atPercent + 5}%`,
    height: '100%',
    backgroundColor: 'blue',
    textAlign: 'right',
  };
  const percentText = {
    color: 'white',
    fontWeight: 'bold',
  };
  return (
    <div style={containerBar}>
      <div style={percentBar}>
        <span>{atPercent}%</span>
      </div>
    </div>
  );
}
