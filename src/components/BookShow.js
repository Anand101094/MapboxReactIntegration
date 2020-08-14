import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Rows from '../components/Rows'

const BookShow = ({ setShow, selectedShowData, selectedShow, setSeats, selectedSeats }) => {

    let seats = Object.keys(selectedSeats).join(' ')

    return (
        <div className="booking-screen">
            <div className='show-selection-row'>
                <span className='select-show'>Select Show:</span>
                <input type='radio'
                    name='show-selection'
                    id='show1'
                    value='show1'
                    checked={selectedShow === 'show1'}
                    onChange={(e) => setShow(e.target.value)}
                /><label htmlFor='show1'>Show 1</label>
                <input type='radio'
                    name='show-selection'
                    id='show2'
                    value='show2'
                    checked={selectedShow === 'show2'}
                    onChange={(e) => setShow(e.target.value)}
                /><label htmlFor='show2'>Show 2</label>
                <input type='radio'
                    name='show-selection'
                    id='show3'
                    value='show3'
                    checked={selectedShow === 'show3'}
                    onChange={(e) => setShow(e.target.value)}
                /><label htmlFor='show3'>Show 3</label>
            </div>
            {
                selectedShowData.map(row => {
                    return <Rows key={row.id} row={row} setSeats={setSeats} selectedSeats={selectedSeats} />
                })
            }
            <div className='seat-details'>
                <span>Selected Seats : {seats}</span>
            </div>
            <Link to='/ticketsummary'><button disabled={!Object.keys(selectedSeats).length}>Book</button></Link>
        </div>
    )
}

export default BookShow