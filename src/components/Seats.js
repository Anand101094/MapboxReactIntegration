import React from 'react'

const Seats = ({ setSeats, seat, selected, price }) => {

    return (
        <div className='movie-seat'>
            {
                seat.name ?
                    <span className={`seat-id ${selected ? 'selected' : ''} ${seat.booked ? 'booked' : ''}`} 
                    onClick={seat.booked ? null : () => setSeats(seat.name, price)}
                    title={`${seat.booked ? `${seat.name} is not available. Book other seats.` : ''}`}
                    >{seat.name}</span>
                    : null
            }
        </div>
    )
}

export default Seats