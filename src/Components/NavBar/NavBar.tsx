import React, {useContext} from 'react';
import { AuthContext } from '../../Contexts/useAuthContext';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

    const { informationUser } = useContext(AuthContext);

    const secondaryColor  = informationUser?.theme?.secondaryColor || '#857df8'

    return (
        <div className='navBar' style={{ "backgroundColor": secondaryColor}}>
            <li>
                <button style={{ "backgroundColor": secondaryColor }}>Statistiques</button>
            </li>
            <li>
                <button style={{ "backgroundColor": secondaryColor}}>Répértoire Client</button>
            </li>
            <li>
                <button style={{ "backgroundColor": secondaryColor}}>Boutique</button>
            </li>
            <li>
                <NavLink to='/entreprise'>
                    <button style={{ "backgroundColor": secondaryColor}}>Entreprise</button>
                </NavLink>
            </li>
        </div>
    );
};

export default NavBar;