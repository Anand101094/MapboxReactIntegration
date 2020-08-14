import React from 'react'
import { withRouter } from 'react-router-dom'

const PaymentConfirmation = ({ totalPrice, setSelectedShow, setSelectedSeats, ...props }) => {

    const handleClick = () => {
        setSelectedShow('show1')
        setSelectedSeats({})
        props.history.push('/')
    }

    let serviceTax = +(14 / 100 * totalPrice).toFixed(2)
    let otherTaxes = 0.5 / 100 * totalPrice

    return (
        <div className='payment-confirmation'>
            <div>Revenue: Rs.{totalPrice}</div>
            <div>Service Tax: Rs.{serviceTax}</div>
            <div>Swachh Bharat Cess: Rs.{otherTaxes}</div>
            <div>Krishi Kalyan Cess: Rs.{otherTaxes}</div>

            <button onClick={handleClick}>Home</button>
        </div>
    )
}

export default withRouter(PaymentConfirmation)