import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/login', { // Use your backend URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Login successful:', data);
        // Handle successful login, store token in local storage or state
      } else {
        setErrorMessage(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setErrorMessage('An error occurred while trying to log in. Please try again later.');
    }
  };

  return (
      <div className="main-wrap">
        {/* The rest of your component remains the same */}
        <form onSubmit={handleSubmit}>
          <div className="form-group icon-input mb-3">
            <label>Email</label>
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="style2-input ps-5 form-control text-grey-900 font-xsss fw-600"
                placeholder="Email"
                required
            />
          </div>

          <div className="form-group icon-input mb-3">
            <label>Mot de passe</label>
            <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="style2-input ps-5 form-control text-grey-900 font-xsss fw-600"
                placeholder="Mot de passe"
                required
            />
          </div>

          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

          <button type="submit" className="form-control text-center style2-input text-white fw-600 bg-dark border-0 p-0">
            Se connecter
          </button>
        </form>
      </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f2f5',
  },
  card: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
    width: '400px',
  },
};

export default Login;
