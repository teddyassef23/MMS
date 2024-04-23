import { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_MEMBER } from '../utils/queries';
import { UPDATE_MEMBER } from '../utils/mutations';
import DatePick from '../components/Date';
import { Col, Row } from 'antd';
import { Flex, Input } from 'antd';
import { useNavigate } from 'react-router-dom';


const { TextArea } = Input;

const Payment = () => {
    const navigateTo = useNavigate();

    const [paymentInfo, setPaymentInfo] = useState({
        payFor: '',
        amount: '',
        memberId: '', // New field for member ID
    });

    const [searchedMember, setSearchedMember] = useState(null); // State to hold the searched member data

    const { loading, error, data } = useQuery(GET_MEMBER, {
        variables: { memberId: paymentInfo.memberId },
        skip: !paymentInfo.memberId, // Skip the query if memberId is not provided
    });

    const [savePayment] = useMutation(UPDATE_MEMBER);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setPaymentInfo({ ...paymentInfo, [name]: value });
    };

    const handleSearchMember = () => {
        // Trigger search for member by ID
        if (paymentInfo.memberId) {
            setSearchedMember(data?.getMember); // Update searched member data
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await savePayment({
                variables: {
                    memberId: paymentInfo.memberId,
                    paymentInput: {
                        amount: parseFloat(paymentInfo.amount),
                    },
                    memberInput: {
                        // Include any additional member data you want to submit
                        // memberId: paymentInfo.memberId,
                        memberNumber: searchedMember.memberNumber,
                        firstName: searchedMember.firstName,
                        lastName: searchedMember.lastName,
                        startDate: searchedMember.startDate,
                        endDate: searchedMember.endDate,
                        gender: searchedMember.gender
    
                        // Add other member fields here
                    },
                },
            });
            // Reset form fields after successful submission
            setPaymentInfo({
                payFor: '',
                amount: '',
                memberId: '',
            });

            navigateTo('/members')

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='App' >
            <h1> Payment page</h1>
            <form className='' onSubmit={handleSubmit}>

            <Row>
                <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                                  <div>
                    <label htmlFor="memberId" className='label'>Member ID</label>
                    <input
                        type="text"
                        id="memberId"
                        name="memberId"
                        value={paymentInfo.memberId}
                        onChange={handleInputChange}
                    />
                    <button type="button" onClick={handleSearchMember}>Search</button>
                </div>

                {searchedMember && (
                    <div>
                        <h2>Member Info</h2>
                        <p>Member ID: {searchedMember.memberNumber}</p>
                        <p>First Name: {searchedMember.firstName}</p>
                        <p>Last Name: {searchedMember.lastName}</p>
                        {/* Render other member details here */}
                    </div>
                )}

                {/* Render payment form */}
            
                </Col>
                <Col xs={30} sm={26} md={22} lg={4} xl={4}>

                </Col>
                <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                <div>
                    <label htmlFor="cardHolder" className='label'>Amount</label>
                    <input
                        type="text"
                        id="amount"
                        name="amount"
                        value={paymentInfo.amount}
                        onChange={handleInputChange}
                    />
                </div>

                <label htmlFor="cardNumber" className='label'>Pay Date</label>
                

                <button type="submit">Submit Payment</button>
                </Col>
            </Row>

    
                
            </form>
        </div>
    );
};

export default Payment;
