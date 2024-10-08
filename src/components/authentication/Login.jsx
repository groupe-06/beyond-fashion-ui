import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique de soumission ici
    console.log(formData);
  };

  return (
    <div className="main-wrap">
      <div className="nav-header bg-transparent shadow-none border-0">
        <div className="nav-top w-100">
          <a href="index.html">
            <i className="feather-zap text-success display1-size me-2 ms-0"></i>
            <span className="d-inline-block fredoka-font ls-3 fw-600 text-current font-xxl logo-text mb-0">Sociala</span>
          </a>
          <div className="ms-auto">
            <a href="/register" className="header-btn bg-dark text-white font-xsss p-3 rounded-xl">Register</a>
          </div>
        </div>
      </div>

      <div style={styles.container}>
        <div style={styles.card}>
          <h2 className="fw-700 display1-size display2-md-size mb-4">Connexion</h2>
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

            <button type="submit" className="form-control text-center style2-input text-white fw-600 bg-dark border-0 p-0">
              Se connecter
            </button>
          </form>
        </div>
      </div>
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
