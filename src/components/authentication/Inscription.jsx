import React, { useState } from 'react';

const Inscription = () => {

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirm_password: '',
    phoneNumber: '',
    address: '',
    gender: 'MALE',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Baba issa et IBK, allez mettre la logique de soumission ici
    console.log(formData);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Inscription</h2>
        <div className="form-group">
          <label>Prénom</label>
          <input 
            type="text" 
            name="firstname" 
            value={formData.firstname} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Nom</label>
          <input 
            type="text" 
            name="lastname" 
            value={formData.lastname} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Mot de passe</label>
          <input 
            type="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Confirmer le mot de passe</label>
          <input 
            type="password" 
            name="confirm_password" 
            value={formData.confirm_password} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Numéro de téléphone</label>
          <input 
            type="tel" 
            name="phoneNumber" 
            value={formData.phoneNumber} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Adresse</label>
          <input 
            type="text" 
            name="address" 
            value={formData.address} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Genre</label>
          <select 
            name="gender" 
            value={formData.gender} 
            onChange={handleChange} 
          >
            <option value="MALE">Homme</option>
            <option value="FEMALE">Femme</option>
          </select>
        </div>
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
};

export default Inscription;
