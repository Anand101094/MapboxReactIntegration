import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Screen1Data } from './mockData/screen1'
import { Screen2Data } from './mockData/screen2'
import { Screen3Data } from './mockData/screen3'
import './app.scss'

import BookShow from './components/BookShow'
import TicketSummary from './components/TicketSummary'
import PaymentConfirmation from './components/PaymentConfirmation'

const App = () => {

    const [selectedShowData, setSelectedShowData] = useState(Screen1Data.rows)
    const [selectedSeats, setSelectedSeats] = useState({})
    const [show1Data, setShow1Data] = useState(Screen1Data.rows)
    const [show2Data, setShow2Data] = useState(Screen2Data.rows)
    const [show3Data, setShow3Data] = useState(Screen3Data.rows)
    const [selectedShow, setSelectedShow] = useState('show1')

    useEffect(() => {
        setSelectedSeats({})
    }, [])

    useEffect(() => {
        setSelectedSeats({})
        switch (selectedShow) {
            case 'show1':
                setSelectedShowData(show1Data)
                break;
            case 'show2':
                setSelectedShowData(show2Data)
                break;
            case 'show3':
                setSelectedShowData(show3Data)
                break;
            default:
                setSelectedShowData(show1Data)
        }
    }, [selectedShow])

    const setSeats = (id, price) => {
        if (selectedSeats[id]) {
            let cloneSelectedSeats = Object.assign({}, selectedSeats)
            delete cloneSelectedSeats[id]
            setSelectedSeats(cloneSelectedSeats)
        } else {
            setSelectedSeats({ ...selectedSeats, [id]: price })
        }
    }

    const setShow = (data) => {
        if (data) {
            setSelectedShow(data)
        }
    }

    const bookTickets = () => {
        Object.keys(selectedSeats).forEach(item => {
            let findRow = selectedShowData.find(row => row.id === item.slice(0, 1))
            let findSeat = findRow.seats.find(seat => seat.name === item)
            findSeat.booked = true
        })
    }

    let totalPrice = Object.values(selectedSeats).reduce((acc, item) => acc + item, 0)

    return (
        <div className='main-app container'>
            <h4>Book Tickets</h4>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/'><BookShow bookTickets={bookTickets} setShow={setShow} selectedShowData={selectedShowData} selectedShow={selectedShow} selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} setSeats={setSeats} /></Route>
                    <Route exact path='/ticketsummary'><TicketSummary totalPrice={totalPrice} selectedShow={selectedShow} /></Route>
                    <Route exact path='/payment-confirmation'><PaymentConfirmation totalPrice={totalPrice} setSelectedSeats={setSelectedSeats} setSelectedShow={setSelectedShow} /></Route>
                </Switch>
            </BrowserRouter>
        </div>
    )

}

export default App