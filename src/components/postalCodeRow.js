import React from 'react'

const PostalCodeRow = ({ item, top }) => {
    return (
        <div className='postal-code-row' style={{ top: `${top}px ` }}>
            <span className='post-row-data lt'>{item.postal_code}</span>
            <span className='post-row-data lt'>{item.position.lat}</span>
            <span className='post-row-data lt'>{item.position.lng}</span>
        </div>
    )
}

export default PostalCodeRow