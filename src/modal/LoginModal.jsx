import React, { useEffect } from 'react';

const LoginModal = ({ isOpen, onClose, formData, handleChange, handleSubmit }) => {
    // Ne pas retourner null ici, mais gérer l'affichage avec le CSS
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'; // Désactive le défilement
        } else {
            document.body.style.overflow = 'auto'; // Réactive le défilement
        }
        return () => {
            document.body.style.overflow = 'auto'; // Réactive le défilement à la fermeture
        };
    }, [isOpen]);

    if (!isOpen) return null; // Retourne null si le modal n'est pas ouvert

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button type="button" className="close" onClick={onClose} aria-label="Close">
                    <i className="ti-close text-grey-500"></i>
                </button>
                <div className="modal-body p-3 d-flex align-items-center bg-none">
                    <div className="card shadow-none rounded-0 w-100 p-2 pt-3 border-0">
                        <div className="card-body rounded-0 text-left p-3">
                            <h2 className="fw-700 display1-size display2-md-size mb-4">Login into <br />your account</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group icon-input mb-3">
                                    <i className="font-sm ti-email text-grey-500 pe-0"></i>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="style2-input ps-5 form-control text-grey-900 font-xsss fw-600"
                                        placeholder="Your Email Address"
                                        required
                                    />
                                </div>
                                <div className="form-group icon-input mb-1">
                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="style2-input ps-5 form-control text-grey-900 font-xss ls-3"
                                        placeholder="Password"
                                        required
                                    />
                                    <i className="font-sm ti-lock text-grey-500 pe-0"></i>
                                </div>
                                <div className="form-check text-left mb-3">
                                    <input
                                        type="checkbox"
                                        name="rememberMe"
                                        checked={formData.rememberMe}
                                        onChange={handleChange}
                                        className="form-check-input mt-2"
                                        id="exampleCheck4"
                                    />
                                    <label className="form-check-label font-xsss text-grey-500" htmlFor="exampleCheck4">Remember me</label>
                                    <a href="forgot.html" className="fw-600 font-xsss text-grey-700 mt-1 float-right">Forgot your Password?</a>
                                </div>
                                <div className="col-sm-12 p-0 text-left">
                                    <div className="form-group mb-1">
                                        <button type="submit" className="form-control text-center style2-input text-white fw-600 bg-dark border-0 p-0">
                                            Login
                                        </button>
                                    </div>
                                    <h6 className="text-grey-500 font-xsss fw-500 mt-0 mb-0 lh-32">
                                        Don’t have an account? <a href="register.html" className="fw-700 ms-1">Register</a>
                                    </h6>
                                </div>
                                <div className="col-sm-12 p-0 text-center mt-3">
                                    <h6 className="mb-0 d-inline-block bg-white fw-600 font-xsss text-grey-500 mb-4">
                                        Or, Sign in with your social account
                                    </h6>
                                    <div className="form-group mb-1">
                                        <a href="#" className="form-control text-left style2-input text-white fw-600 bg-facebook border-0 p-0 mb-2">
                                            <img src="images/icon-1.png" alt="icon" className="ms-2 w40 mb-1 me-5" /> Sign in with Google
                                        </a>
                                    </div>
                                    <div className="form-group mb-1">
                                        <a href="#" className="form-control text-left style2-input text-white fw-600 bg-twiiter border-0 p-0">
                                            <img src="images/icon-3.png" alt="icon" className="ms-2 w40 mb-1 me-5" /> Sign in with Facebook
                                        </a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;
