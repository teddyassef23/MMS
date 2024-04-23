import React from 'react';
import { Card } from 'antd';
import SearchCom from '../Search/Search';
import './../css/home.css'
import { useState } from 'react';

const memberData = ({
    fullName: ' Carl Joe Pictor ',
    address: '123 main Street, LA CA 770123',


});


const CardComp = () => {




   


    return (
        <>
            < Card
                title="Find Member by ID "
                bordered={false}
                style={{
                    width: 400,
                }}
            />
            <SearchCom />
            <label id='fullNAme' 
                    value={memberData.fullName} 
                    htmlFor="cardHolder" >Full Name ፡ {memberData.fullName}</label>
            <label id='address' 
                    value={memberData.address} 
                    htmlFor="cardHolder" >  Address : {memberData.address}</label>
            <label id='thankyou' 
                    value={memberData.fullName} 
                    htmlFor="cardHolder" >
                        <span className='note'> We thank you for {memberData.fullName} </span>   </label>


        </>
    );
}
export default CardComp;