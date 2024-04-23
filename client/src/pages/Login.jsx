import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { FaEnvelope, FaLock } from 'react-icons/fa'; 
import logo from '../assets/logo2.png'; 
import "../components/css/login.css";
import Footer from '../components/Footer/index'; // Import the Footer component

const Login = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // Update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // Submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
    // Clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <>
          <div className="card login-card"  style={{
    marginLeft: '500px !important',
    display: 'inline',
  }}>
            <div className="card-header bg-white text-light">
              <img src={logo} alt="Logo" className="logo" />
              <div className="login">Login</div>
            </div>
            <div className="card-body">
              {data ? (
                <p>
                  Success! You may now head{' '}
                  <Link to="/">back to the homepage.</Link>
                </p>
              ) : (
                <form onSubmit={handleFormSubmit}>
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
              )}
              {error && (
                <div className="my-3 p-3 bg-danger text-white">
                  {error.message}
                </div>
              )}
            </div>
          </div>
    </>
  );
};

export default Login;
