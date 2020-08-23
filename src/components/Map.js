import React, { useState } from 'react'
import ReactMapGl, { Marker, Popup } from 'react-map-gl'


const Map = ({ currentData, setViewPort, viewport }) => {

    const [targetMarker, setTargetMarker] = useState(null)

    return (
        <ReactMapGl {...viewport}
            mapboxApiAccessToken="pk.eyJ1IjoiYW5hcmF0IiwiYSI6ImNrZTVyOGpnYzE1bm0yc280dzJmMjM5OWwifQ.GU8v7KG8XnGnwqHICZ8vmw"
            onViewportChange={viewport => {
                setViewPort(viewport)
            }}
        >
            {
                currentData.map(item => {
                    let size = currentData.length === 1 ? '40px' : '24px'
                    return (
                        <Marker
                            key={item.id}
                            latitude={item.position.lat}
                            longitude={item.position.lng}
                        >
                            <span className="material-icons marker" style={{ fontSize: size }}
                                onMouseEnter={() => setTargetMarker(item)}
                                onMouseLeave={() => setTargetMarker(null)}
                            >location_on</span>
                        </Marker>
                    )
                })
            }

            {
                targetMarker && (
                    <Popup latitude={targetMarker.position.lat} longitude={targetMarker.position.lng} closeButton={false}>
                        <div className='info'>
                            {targetMarker.postal_code}
                        </div>
                    </Popup>
                )
            }

        </ReactMapGl>
    )
}

export default Map