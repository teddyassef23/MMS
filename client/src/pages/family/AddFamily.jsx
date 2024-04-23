import React, { useState } from 'react'
import { ADD_FAMILY } from '../../utils/mutations.js';
import { useMutation, gql } from '@apollo/client';

export default function AddFamily() {
    const [addfamily] = useMutation(ADD_FAMILY);
    const [familyData, setAddFamily] = useState(
        {
            firstName: "",
            middleName: "",
            lastName: "",
            baptismalName: "",
            gender:"",
            relationShip:"",
        }
    )

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await addfamily({
              variables: {
                input: familyData,
              },
            });
      
            console.log(data);
          } catch (error) {
            console.error(error);
          }
        
      };







    const handleChange = (e) =>{
        const { name, value } = e.target;
        setAddFamily({
          ...familyData,
          [name]: value,
        });

    }
    
  return (
    <div className='App'>
            <h1>Add  Family</h1>
            <form onSubmit={handleSubmit}>

            <label>First Name</label>
            <input
              name="firstName"
              placeholder="firstName"
              type="text"
              value={familyData.family.firstName}
              onChange={(e) => handleChange(e, 0)}
            />

            

            <label>Middle Name</label>
            <input
              name="middleName"
              placeholder="meddleName"
              type="text"
              value={familyData.family.middleName}
              onChange={(e) => handleChange(e, 0)}
            />

            

            <label>Last Name</label>
            <input
              name="lastName"
              placeholder="lastName"
              type="text"
              value={familyData.family.lastName}
              onChange={(e) => handleChange(e, 0)}
            />

            

            <label>Baptismal Name</label>
            <input
              name="BaptismalName"
              placeholder="BaptismalName"
              type="text"
              value={familyData.family.BaptismalName}
              onChange={(e) => handleChange(e, 0)}
            />

            

            </form>


    </div>
  )
}
