import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap'; 
import Baner from './../../assets/logoo.png'
import Auth from '../../utils/auth';
import '../css/payment.css'

const PaymentElection = () => {
    const [paymentSize, setPaymentSize] = useState('');

    const handlePaymentSizeChange = (e) => {
        setPaymentSize(e.target.value);
    };

    const handlePaymentSubmit = (e) => {
        e.preventDefault();
        // Perform payment submission logic here
        if (paymentSize === "") {
            return;
        } else {
            // Redirect to the payment page
            window.location.href = '../pages/payment';
        }
    };

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand>
                        <Link to="/">
                            <img src={Baner} alt="Logo" />
                        </Link>
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <div className="payment-form">
                <h2 className='label'>Payment Election</h2>
                <form onSubmit={handlePaymentSubmit}>
                    <div className="form-group">
                        <label htmlFor="paymentSize" className='label'>Payment Amount:</label>
                        <input
                            type="text"
                            id="paymentSize"
                            name="paymentSize"
                            value={paymentSize}
                            onChange={handlePaymentSizeChange}
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default PaymentElection;