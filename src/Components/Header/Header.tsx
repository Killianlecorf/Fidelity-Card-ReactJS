import React from 'react';
import logo from '../../Assets/img/logo.png'

const Header: React.FC = () => {
    return (
        <div className='Header-content'>
            <div className="logo-content">
                <img src={logo} alt="logo" />
            </div>
            <div className="entrprise-name">
                <h1>Fidelity Card</h1>
            </div>
            <div className="profil-content">

            </div>
        </div>
    );
};

export default Header;