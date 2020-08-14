import React from 'react'
import { Link } from 'react-router-dom'

const TicketSummary = ({ selectedShow, totalPrice }) => {

    let serviceTax = +(14 / 100 * totalPrice).toFixed(2)
    let otherTaxes = 0.5 / 100 * totalPrice
    let total = totalPrice + serviceTax + (2 * otherTaxes)

    return (
        <div className='ticket-summary'>
            <div>Successfully Booked - {selectedShow}</div>
            <div>Subtotal: Rs.{totalPrice}</div>
            <div>Service Tax @14%: Rs.{serviceTax}</div>
            <div>Swachh Bharat Cess @0.5%: Rs.{otherTaxes}</div>
            <div>Krishi Kalyan Cess @0.5%: Rs.{otherTaxes}</div>
            <div>Total: Rs.{total}</div>

            <div className='back-n-next'>
                <Link to='/'><button>Back</button></Link>
                <Link to='/payment-confirmation'><button >Next</button></Link>
            </div>
        </div>
    )
}

export default TicketSummary