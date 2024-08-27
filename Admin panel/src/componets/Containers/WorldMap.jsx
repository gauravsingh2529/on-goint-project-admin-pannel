import React from 'react';
import { Map } from 'react-jvectormap';
// import 'react-jvectormap/lib/styles/css/jquery-jvectormap.css'; // Corrected import

const WorldMap = () => {
  return (
    <div className="card card-round">
      <div className="card-header">
        <div className="card-head-row">
          <div className="card-title">Users Geolocation</div>
        </div>
      </div>
      <div className="card-body">
        <div className="map-container" style={{ height: '400px' }}>
          <Map
            map={'world_mill'}
            backgroundColor="transparent"
            containerStyle={{
              width: '100%',
              height: '100%',
            }}
            containerClassName="map"
            series={{
              regions: [{
                values: {
                  'US': 298,
                  'CN': 136,
                  'IN': 99,
                  'BR': 70,
                  'RU': 65
                },
                scale: ['#C8E6C9', '#388E3C'],
                normalizeFunction: 'polynomial'
              }]
            }}
            onRegionClick={(e, code) => {
              alert('You clicked on: ' + code);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default WorldMap;
