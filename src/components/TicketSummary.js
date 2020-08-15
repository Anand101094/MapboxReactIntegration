import React, { useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'

const TicketSummary = ({ selectedShow, totalPrice, ...props }) => {

    let serviceTax = +(14 / 100 * totalPrice).toFixed(2)
    let otherTaxes = 0.5 / 100 * totalPrice
    let total = totalPrice + serviceTax + (2 * otherTaxes)

    useEffect(() => {
        if (!totalPrice) {
            props.history.push('/')
        }
    }, [])

    return (
        <div className='ticket-summary'>
            <div>Successfully Booked - {selectedShow}</div>
            <div>Subtotal: Rs.{totalPrice}</div>
            <div>Service Tax @14%: Rs.{serviceTax}</div>
            <div>Swachh Bharat Cess @0.5%: Rs.{otherTaxes}</div>
            <div>Krishi Kalyan Cess @0.5%: Rs.{otherTaxes}</div>
            <div>Total: Rs.{total}</div>

            <div className='back-n-next'>
                <Link to='/'><button className='btn'>Back</button></Link>
                <Link to='/payment-confirmation'><button className='btn'>Next</button></Link>
            </div>
        </div>
    )
}

export default withRouter(TicketSummary)