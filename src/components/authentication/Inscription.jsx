import React, { useState } from 'react';
import LoginModal from '../../modal/LoginModal'; 

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

    const [errors, setErrors] = useState({});
    const [modalOpen, setModalOpen] = useState(false); // État pour contrôler l'ouverture du modal

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = () => {
        let formErrors = {};
        if (formData.password !== formData.confirm_password) {
            formErrors.password = "Passwords do not match";
        }
        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log(formData);
        } else {
            console.log("Form validation failed");
        }
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
                        {/* Modifier le bouton Login pour ouvrir le modal */}
                        <button 
                            className="header-btn d-none d-lg-block bg-dark fw-500 text-white font-xsss p-3 ms-auto w100 text-center lh-20 rounded-xl"
                            onClick={() => setModalOpen(true)} // Ouvrir le modal
                        >
                            Login
                        </button>
                    </div>
                </div>
            </div>

            <div style={styles.container}>
                <div style={styles.card}>
                    <h2 className="fw-700 display1-size display2-md-size mb-4">
                        Create <br />your account
                    </h2>
                    <form onSubmit={handleSubmit}>
                        {/* Formulaire d'inscription */}
                        <div className="form-group icon-input mb-3">
                            <input
                                type="text"
                                name="firstname"
                                value={formData.firstname}
                                onChange={handleChange}
                                className="style2-input ps-5 form-control text-grey-900 font-xsss fw-600"
                                placeholder="First Name"
                                required
                            />
                        </div>
                        <div className="form-group icon-input mb-3">
                            <input
                                type="text"
                                name="lastname"
                                value={formData.lastname}
                                onChange={handleChange}
                                className="style2-input ps-5 form-control text-grey-900 font-xsss fw-600"
                                placeholder="Last Name"
                                required
                            />
                        </div>
                        <div className="form-group icon-input mb-3">
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="style2-input ps-5 form-control text-grey-900 font-xsss fw-600"
                                placeholder="Email Address"
                                required
                            />
                        </div>
                        <div className="form-group icon-input mb-3">
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="style2-input ps-5 form-control text-grey-900 font-xss ls-3"
                                placeholder="Password"
                                required
                            />
                            {errors.password && (
                                <small className="text-danger">{errors.password}</small>
                            )}
                        </div>
                        <div className="form-group icon-input mb-3">
                            <input
                                type="password"
                                name="confirm_password"
                                value={formData.confirm_password}
                                onChange={handleChange}
                                className="style2-input ps-5 form-control text-grey-900 font-xss ls-3"
                                placeholder="Confirm Password"
                                required
                            />
                        </div>
                        <div className="form-group icon-input mb-3">
                            <input
                                type="text"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                className="style2-input ps-5 form-control text-grey-900 font-xsss fw-600"
                                placeholder="Phone Number"
                                required
                            />
                        </div>
                        <div className="form-group icon-input mb-3">
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                className="style2-input ps-5 form-control text-grey-900 font-xsss fw-600"
                                placeholder="Address"
                                required
                            />
                        </div>
                        <div className="form-group icon-input mb-3">
                            <select
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                className="style2-input ps-5 form-control text-grey-900 font-xsss fw-600"
                            >
                                <option value="MALE">Male</option>
                                <option value="FEMALE">Female</option>
                                <option value="OTHER">Other</option>
                            </select>
                        </div>
                        <div className="form-check text-left mb-3">
                            <input
                                type="checkbox"
                                className="form-check-input mt-2"
                                id="exampleCheck2"
                                required
                            />
                            <label
                                className="form-check-label font-xsss text-grey-500"
                                htmlFor="exampleCheck2"
                            >
                                Accept Term and Conditions
                            </label>
                        </div>
                        <button type="submit" className="form-control text-center style2-input text-white fw-600 bg-dark border-0 p-0">
                            Register
                        </button>
                    </form>

                    <h6 className="text-grey-500 font-xsss fw-500 mt-0 mb-0 lh-32">
                        Already have an account? <a href="/login" className="fw-700 ms-1">Login</a>
                    </h6>
                </div>
            </div>

            {/* Intégrer le modal ici */}
            <LoginModal 
                isOpen={modalOpen} 
                onClose={() => setModalOpen(false)} 
                formData={{ email: formData.email, password: formData.password }} // Vous pouvez passer des données si nécessaire
                handleChange={handleChange} // Si vous souhaitez gérer les changements d'input dans le modal
                handleSubmit={handleSubmit} // Si vous souhaitez gérer la soumission du formulaire dans le modal
            />
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

export default Inscription;
