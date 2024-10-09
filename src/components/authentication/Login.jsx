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
    <div className="background">
      <div className="thread">Thread</div>
      <div className="line">line</div>
      
      <div className="login-container">
        <h1>Threadline</h1>
        <h2>Login</h2>
        <form>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="username@gmail.com" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Password" required />
          </div>
          <a href="#" className="forgot-password">Forgot Password?</a>
          <button type="submit" className="sign-in">Sign in</button>
        </form>
        <div className="or-continue">or continue with</div>
        <div className="social-login">
          <button className="google">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" />
          </button>
          <button className="github">
            <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" />
          </button>
          <button className="facebook">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" />
          </button>
        </div>
        <div className="register">
          Don't have an account yet? <a href="#">Register for free</a>
        </div>
      </div>
    </div>
  );
};


export default Login;
