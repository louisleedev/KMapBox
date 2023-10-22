"use client"

import React, { useEffect, useState, Component, useRef } from 'react';

import mapboxgl from '!mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export default (props) => {
    const [map, setMap] = useState(null);
    const [feature, setFeature] = useState({});
    const bigmapContainer = useRef(null);
    const [searchName, setSearchName] = useState('')
    //Initial function
    useEffect(() => {
        //Write code here that runs after the component is mounted and after it is re-rendered.
        initMap();
        return () => {
            //The code before clearing the map
        }
    }, [])

    const initMap = () => {
        mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
        const map = new mapboxgl.Map({
            //Set the initial value and location of this new map
            container: bigmapContainer.current,
            style: 'mapbox://styles/mapbox/dark-v9',
            center: [-77.429131, 39.006699],
            zoom: 9,
            dragPan: true,
            dragRotate: false,
            renderWorldCopies: false,
            // projection: 'naturalEarth',
            // maxBounds: [[-280, -90], [280, 90]],
        });
        // window.map = map;
        map.on('load', () => {
            // let features = []
            const geojsondata_polygon = require('../data/National_Obesity_By_State.json');
            const geojsondata_point = require('../data/National_Obesity_By_state_points.json');
            // Add source from json file
            map.addSource('source_National_Obesity_By_State_points', {
                type: 'geojson',
                data: geojsondata_point,
            });
            map.addSource('source_National_Obesity_By_State', {
                type: 'geojson',
                data: geojsondata_polygon,
            });
            // Fill the style and paint according to geo info from source
            map.addLayer({
                id: 'layer_fill_National_Obesity_By_State',
                type: 'fill',
                source: 'source_National_Obesity_By_State',
                paint: {
                    'fill-opacity': 0.5,
                    'fill-color': [
                        'case',
                        ['==', ['get', 'NAME'], 'Virginia'],
                        '#377eb8',
                        ['==', ['get', 'NAME'], 'Arizona'],
                        '#377eb8',
                        '#3e61b8'
                    ],
                },
            });

            // highLight fill
            map.addLayer({
                id: 'layer_highlight_fill_National_Obesity_By_State',
                type: 'fill',
                source: 'source_National_Obesity_By_State',
                paint: {
                    'fill-opacity': 0.9,
                    'fill-color': '#fffc00'
                },
                filter: ['==', ['get', 'NAME'], 'UNKNOW']
            });

            // line
            map.addLayer({
                id: 'layer_line_National_Obesity_By_State',
                type: 'line',
                source: 'source_National_Obesity_By_State',
                paint: {
                    'line-opacity': 0.9,
                    'line-color': '#eee'
                },
            });
            
            // label
            map.addLayer({
                'id': 'Layer_labels_National_Obesity_By_State_points',
                'type': 'symbol',
                'source': 'source_National_Obesity_By_State_points',
                'layout': {
                    'text-field': ['get', 'NAME'],
                    'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
                    'text-radial-offset': 0.5,
                    'text-justify': 'auto',
                },
                'paint': {
                    'text-color': '#fff',
                }
            });
            const popup = new mapboxgl.Popup({
                closeButton: false
            });
            map.on('click', 'layer_fill_National_Obesity_By_State', (e) => {
                // Change the cursor style as a UI indicator.
                map.getCanvas().style.cursor = 'pointer';

                // Populate the popup and set its coordinates based on the feature.
                const feature = e.features[0];
                console.log("e:", e.point, [e.lngLat.lng, e.lngLat.lat], feature);
                popup.remove();
                popup
                    .setLngLat([e.lngLat.lng, e.lngLat.lat])
                    .setHTML(
                        `
                        <div >
                            <div style="color:red;">${feature.properties.NAME}</div>
                            <div>Obesity: ${feature.properties.Obesity}</div>
                            <div>Shape Area: ${feature.properties.SHAPE_Area}</div>
                            <div>Shape Length: ${feature.properties.SHAPE_Length}</div>
                        </div>
                        `
                    )
                    .addTo(map);
            });

        });
        setMap(map)
    }
    const clearMap = () => {
        if (!map) return;
        if (map.getLayer('Layer_labels_National_Obesity_By_State_points')) map.removeLayer('Layer_labels_National_Obesity_By_State_points');
        if (map.getLayer('layer_fill_National_Obesity_By_State')) map.removeLayer('layer_fill_National_Obesity_By_State');
        if (map.getLayer('layer_highlight_fill_National_Obesity_By_State')) map.removeLayer('layer_highlight_fill_National_Obesity_By_State');
        if (map.getLayer('layer_line_National_Obesity_By_State')) map.removeLayer('layer_line_National_Obesity_By_State');
        if (map.getSource('source_National_Obesity_By_State')) map.removeSource('source_National_Obesity_By_State');
        if (map.getSource('source_National_Obesity_By_State_points')) map.removeSource('source_National_Obesity_By_State_points');
    }
    const search = () => {
        const geojsondata_polygon = require('../data/National_Obesity_By_State.json');
        let findFeature = geojsondata_polygon.features.find(fea=>fea.properties.NAME.includes(searchName))
        if (findFeature){
            map.setFilter('layer_highlight_fill_National_Obesity_By_State', ['==', ['get', 'NAME'], findFeature.properties.NAME])
        }else{
            alert('not found.')
        }
    }
    const onChange = (e)=>{
        console.log(e)
        setSearchName(e.target.value)
    }

    return (
        <>
            <div className='w-screen h-5/6' ref={bigmapContainer} ></div>
            <div className='w-screen h-1/6 bg-slate-50'>
                <input className="border-solid border-2 border-neutral-600" onChange={onChange}></input> 
                <button className="border-solid border-2 border-neutral-600 px-2" onClick={search}>Search</button>
            </div>
        </>
    );
}
