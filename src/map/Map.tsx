import React from 'react';
import classNames from 'classnames';

import './Map.css';

interface MapProps {
  tiles: Array<Array<boolean>>;
}

export const Map: React.FC<MapProps> = ({
  tiles
}) => {
  return (
    <div className='map'>
      <div className='map-container'>
        {tiles.map(row => (
          <div className='map-row'>
            {row.map(tile => (
              <div className={getTileClassName(tile)}/>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

function getTileClassName(tile: boolean): string {
  return classNames('map-tile', {
    'map-tile-active': tile
  });
}
