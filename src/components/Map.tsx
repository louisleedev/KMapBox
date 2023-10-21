"use client"

import { features } from 'process';
import React, {useState} from 'react';
import ReactMapGL,{Source, Layer, CircleLayer} from 'react-map-gl'
import type {FeatureCollection} from 'geojson';

import { Feature, Point } from 'geojson';

interface GeoJsonProperties {
  // Define your properties here
  name: string;
  // Add other properties as needed
}

const geojson: Feature<Point, GeoJsonProperties> = {
  type: 'Feature',
  geometry: {
    type: 'Point',
    coordinates: [-122.4, 37.8]
  },
  properties: {
    name: 'Example Location', // Add your properties here
    // Add other properties as needed
  }
};

const layerStyle: CircleLayer = {
    id: 'point',
    type: 'circle',
    paint: {
      'circle-radius': 10,
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
                    data={geojson}>
                        <Layer {...layerStyle}></Layer>
            </Source>
        </ReactMapGL>
}

export default Map
// "use client"

// import * as React from "react";
// import mapboxgl from "mapbox-gl";
// import "mapbox-gl/dist/mapbox-gl.css";
// import { sources } from "next/dist/compiled/webpack/webpack";
// // import the mapbox-gl styles so that the map is displayed correctly

// function MapboxMap() {
//     // this is where the map instance will be stored after initialization
//     const [map, setMap] = React.useState<mapboxgl.Map>();

//     // React ref to store a reference to the DOM node that will be used
//     // as a required parameter `container` when initializing the mapbox-gl
//     // will contain `null` by default
//     const mapNode = React.useRef(null);

//     React.useEffect(() => {
//         const node = mapNode.current;
//         // if the window object is not found, that means
//         // the component is rendered on the server
//         // or the dom node is not initialized, then return early
//         if (typeof window === "undefined" || node === null) return;

//         // otherwise, create a map instance
//         const mapboxMap = new mapboxgl.Map({
//             container: node,
//             accessToken: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN,
//             style: "mapbox://styles/mapbox/streets-v11",
//             center: [-74.5, 40],
//             zoom: 9,
//         });

//         mapboxMap.on("load", function(){
//             console.log('yeahh')
//             mapboxMap.addSource("National_Obesity_By_State",{
//                 type:"geojson",
//                 data:"../data/National_Obesity_By_State.geojson"});
            
//             mapboxMap.addLayer({
//                 id:"National_Obesity",
//                 type:"fill",
//                 source:"National_Obesity_By_State"
//             })
//         })

        
//         // save the map object to React.useState
//         setMap(mapboxMap);

//         return () => {
//             mapboxMap.remove();
//         };
//     }, []);

//     return (<div className="h-1/2 h-screen">
//         <div ref={mapNode} style={{ width: "100%", height: "100%" }}/>
//     </div>);
// }

// export default MapboxMap