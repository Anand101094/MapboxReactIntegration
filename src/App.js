import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
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
    // const [show1Data, setShow1Data] = useState(Screen1Data.rows)
    // const [show2Data, setShow2Data] = useState(Screen2Data.rows)
    // const [show3Data, setShow3Data] = useState(Screen3Data.rows)
    const [selectedShow, setSelectedShow] = useState('show1')

    useEffect(() => {
        setSelectedSeats({})
    }, [])

    useEffect(() => {
        setSelectedSeats({})
        switch (selectedShow) {
            case 'show1':
                setSelectedShowData(Screen1Data.rows)
                break;
            case 'show2':
                setSelectedShowData(Screen2Data.rows)
                break;
            case 'show3':
                setSelectedShowData(Screen3Data.rows)
                break;
            default:
                setSelectedShowData(Screen1Data.rows)
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

    let totalPrice = Object.values(selectedSeats).reduce((acc, item) => acc + item, 0)

    return (
        <div className='main-app'>
            <h2>Book Tickets</h2>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/'><BookShow setShow={setShow} selectedShowData={selectedShowData} selectedShow={selectedShow} selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} setSeats={setSeats} /></Route>
                    <Route exact path='/ticketsummary'><TicketSummary totalPrice={totalPrice} selectedShow={selectedShow} /></Route>
                    <Route exact path='/payment-confirmation'><PaymentConfirmation totalPrice={totalPrice} setSelectedSeats={setSelectedSeats} setSelectedShow={setSelectedShow} /></Route>
                </Switch>
            </BrowserRouter>
        </div>
    )

}

export default App