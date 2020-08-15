import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import Rows from '../components/Rows'

const BookShow = ({ setShow, selectedShowData, setSelectedSeats, selectedShow, setSeats, selectedSeats, bookTickets, ...props }) => {

    useEffect(() => {
        setSelectedSeats({})
    }, [])

    const handleClick = () => {
        bookTickets()
        props.history.push('/ticketsummary')
    }

    let seats = Object.keys(selectedSeats).join(' ')

    return (
        <div className="booking-screen">
            <div className='show-selection-row'>
                <span className='select-show'>Select Show:</span>
                <label>
                    <input className="with-gap" name="group1" value='show1' type="radio" checked={selectedShow === 'show1'} onChange={(e) => setShow(e.target.value)} />
                    <span>Show 1</span>
                </label>
                <label>
                    <input className="with-gap" name="group1" value='show2' type="radio" checked={selectedShow === 'show2'} onChange={(e) => setShow(e.target.value)} />
                    <span>Show 2</span>
                </label>
                <label>
                    <input className="with-gap" name="group1" value='show3' type="radio" checked={selectedShow === 'show3'} onChange={(e) => setShow(e.target.value)} />
                    <span>Show 3</span>
                </label>
            </div>
            {
                selectedShowData.map(row => {
                    return <Rows key={row.id} row={row} setSeats={setSeats} selectedSeats={selectedSeats} />
                })
            }
            <div className='seat-details'>
                <span>Selected Seats : {seats}</span>
            </div>
            <div className='references'>
                <div className='booked-stat'><span className='booked-circle'></span><span>Already booked</span></div>
                <div className='available-stat'><span className='available-circle'></span><span>Available</span></div>
                <div className='selected-stat'><span className='selected-circle'></span><span>Selected</span></div>
            </div>
            <button onClick={handleClick} className='btn' disabled={!Object.keys(selectedSeats).length}>Book</button>
        </div>
    )
}

export default withRouter(BookShow)