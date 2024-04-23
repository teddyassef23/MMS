import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa'; 
import Auth from '../utils/auth';
import '../components/css/LoginSignup.css'; 
import Footer from '../components/Footer/index'; // Import the Footer component

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await addUser({
        variables: { ...formState },
      });
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <main className="flex-row justify-center mb-4">
        <div className="col-12 col-lg-10">
          <div className="card signup-card">
            <h4 className="card-header bg-dark text-light p-2">Sign Up</h4>
            <div className="card-body">
              <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label htmlFor="username"><FaUser /> Username</label>
                  <input
                    className="form-input"
                    placeholder="Your username"
                    name="username"
                    type="text"
                    value={formState.username}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email"><FaEnvelope /> Email</label>
                  <input
                    className="form-input"
                    placeholder="Your email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password"><FaLock /> Password</label>
                  <input
                    className="form-input"
                    placeholder="******"
                    name="password"
                    type="password"
                    value={formState.password}
                    onChange={handleChange}
                  />
                </div>
                <button
                  className="btn btn-block btn-primary submit-button"
                  type="submit"
                >
                  Submit
                </button>
              </form>
              {error && (
                <div className="my-3 p-3 bg-danger text-white">
                  {error.message}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      {/* <Footer /> Render the Footer component here */}
    </>
  );
};

export default Signup;
