import React from 'react'
import PostalCodeRow from './postalCodeRow'
import './table.scss'

const PostalCodeTable = ({ postalCodeData, handleScroll, totalCount, filter }) => {

    return (
        <React.Fragment>

            <div className='table-header'>
                <span className='header-data lt'>Postal Codes</span>
                <span className='header-data lt'>Latitudes</span>
                <span className='header-data lt'>Longitudes</span>
            </div>
            <div className='postal-code-table' id="postal-table" onScroll={(e) => handleScroll(e)}>
                <div className='virtual-container' style={{ height: `${totalCount * 40}px` }}>
                    {
                        postalCodeData.map((item, index) => (
                            <PostalCodeRow
                                key={item.id}
                                item={item}
                                top={filter ? (index * 40) : (item.id * 40 - 40)}
                            />
                        ))
                    }
                </div>
            </div>
        </React.Fragment>
    )
}

export default PostalCodeTable