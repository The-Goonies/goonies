import React from 'react';

const TrailList = (props) => {
  return (
    <div>
      <select>
        {props.hikingTrails.map(trail => (
          <option value={trail.name}>{trail.name}</option>
        ))}
      </select>
    </div>
  );
};

export default TrailList;
