"use client"

import React, {useState, useEffect} from 'react';
import ReactMapGL,{Source, Layer, CircleLayer} from 'react-map-gl'


const layerStyle: CircleLayer = {
    id: 'point',
    type: 'circle',
    paint: {
      'circle-radius': 2,
      'circle-color': '#007cbf'
    }
  };

function Map(){

    const [viewState, setViewState] = useState({
        longitude: -100,
        latitude: 40,
        zoom: 7.5
    });

    const [start, setStart] = useState([-73, 42]);
    const [end, setEnd] = useState([-73, 42]);

    return <ReactMapGL 
        {...viewState} 
        onMove={evt => setViewState(evt.viewState)} 
        mapStyle={"mapbox://styles/mapbox/streets-v11"}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        style={{width:"100vw", height:"100vh"}}
        >
            <Source id='National_Obesity_By_State' 
                    type='geojson'  
                    data="https://raw.githubusercontent.com/uber/react-map-gl/master/examples/.data/us-income.geojson">
                        <Layer {...layerStyle}></Layer>
            </Source>
        </ReactMapGL>
}

export default Map
