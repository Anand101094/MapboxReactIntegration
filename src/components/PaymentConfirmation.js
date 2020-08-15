import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'

const PaymentConfirmation = ({ totalPrice, setSelectedShow, setSelectedSeats, ...props }) => {

    useEffect(() => {
        if (!totalPrice) {
            props.history.push('/')
        }
    }, [])

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

            <div className='conf-btn'>
                <button className='btn' onClick={handleClick}>Home</button>
            </div>
        </div>
    )
}

export default withRouter(PaymentConfirmation)