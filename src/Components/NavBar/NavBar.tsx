import React from 'react';

const NavBar = () => {
    return (
        <div className='navBar'>
            <li>
                <button>Statistiques</button>
            </li>
            <li>
                <button>Répértoire Client</button>
            </li>
            <li>
                <button>Boutique</button>
            </li>
            <li>
                <button>Entreprise</button>
            </li>
        </div>
    );
};

export default NavBar;