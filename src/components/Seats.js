import React from 'react'

const Seats = ({ setSeats, seat, selected, price }) => {

    return (
        <div className='movie-seat'>
            {
                seat.name ?
                    <span className={`seat-id ${selected ? 'selected' : ''}`} onClick={() => setSeats(seat.name, price)}>{seat.name}</span>
                    : null
            }
        </div>
    )
}

export default Seats