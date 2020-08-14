import React from 'react'
import Seats from './Seats'

const Rows = ({ row, setSeats, selectedSeats }) => {

    return (
        <div className='movie-row'>
            {
                row.seats.map((seat, index) => {
                    let selected = selectedSeats[seat.name]
                    return <Seats key={index} seat={seat} setSeats={setSeats} selected={selected} price={row.price}/>
                })
            }
        </div>
    )
}

export default Rows