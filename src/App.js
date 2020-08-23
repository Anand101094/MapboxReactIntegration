import React, { useState, useEffect } from 'react'
import PostalCodeTable from './components/PostalCodeTable'
import ReactMapGl, { Marker } from 'react-map-gl'
import { postalData } from './mockData/postData'
import Map from './components/Map'
import { Throttle } from './util'
import './app.scss'


const App = () => {

    const [searchText, setSearchText] = useState('')
    const [currentData, setCurrentData] = useState(postalData.postal_codes.slice(0, 60))
    const [viewport, setViewPort] = useState({
        latitude: 39.3041754,
        longitude: -9.1967347,
        width: '100%',
        height: '100%',
        zoom: 5,
    })
    
    const handleScroll = (e) => {
        if (!searchText) {
            let element = e.target
            let prevElem = Math.floor(element.scrollTop / 40)
            let totalCount = postalData.count;
            let startIndex = prevElem < 20 ? 0 : (prevElem > totalCount - 60) ? totalCount - 60 : prevElem - 20
            let endIndex = startIndex + 60
            let onScreenData = postalData.postal_codes.slice(startIndex, endIndex)
            setCurrentData(onScreenData)
        }
    }

    const scrollToTop = () => {
        let element = document.getElementById("postal-table")
        element.scrollTop = "0"
    }

    const filteredData = (text) => {
        let data = [...postalData.postal_codes]
        if (text) {
            let filteredRows = data.filter((item, index) => {
                return item.postal_code && item.postal_code.includes(text)
            })
            setCurrentData(filteredRows)
            if (filteredRows.length) {
                setViewPort({
                    ...viewport,
                    latitude: filteredRows[0].position.lat,
                    longitude: filteredRows[0].position.lng,
                    zoom: filteredRows.length === 1 ? 15 : 5
                })
            }
            scrollToTop()
        } else {
            setCurrentData(data.slice(0, 60))
        }
    }

    const handleChange = (e) => {
        let searchText = e.target.value
        setSearchText(searchText)
        filteredData(searchText)
    }

    const clearSearch = () => {
        setSearchText('')
        setCurrentData(postalData.postal_codes.slice(0, 60))
    }
    const throttledScroll = Throttle(handleScroll, 100)

    return (
        <div className='main-app '>
            <h3>Postal Code Search</h3>
            <div className='row map-n-table'>
                <div className='col s6 map-section'>
                    <Map
                        currentData={currentData}
                        setViewPort={setViewPort}
                        viewport={viewport}
                    />
                </div>

                <div className='col s5 offset-s1 table-section'>
                    <div className='search-section'>
                        <input type='text' className='search-box' onChange={handleChange} value={searchText} placeholder="Search postal code" />
                        <span className='material-icons search-icon'>search</span>
                        {searchText && <span className='material-icons close-icon' onClick={clearSearch}>close</span>}
                    </div>

                    <PostalCodeTable
                        handleScroll={throttledScroll}
                        postalCodeData={currentData}
                        totalCount={postalData.count}
                        filter={searchText}
                    />
                </div>
            </div>
        </div>
    )

}

export default App