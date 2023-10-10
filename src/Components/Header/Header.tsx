import React , {useContext} from 'react';
import logo from '../../Assets/img/logo_panda_blanc_2.png';
import { FaUserCircle, FaRegSun, FaPowerOff, FaBars} from "react-icons/fa";
import fetchApi from '../../Utils/request'
import UrlRedirection from '../../Utils/UrlRedirection'
import { AuthContext } from '../../Contexts/useAuthContext';
import { NavLink } from 'react-router-dom';

interface HeaderProps {
    isOpenModal? : boolean;
    setIsOpenModal?: React.Dispatch<React.SetStateAction<boolean>>;
  }

const Header: React.FC<HeaderProps> = ({isOpenModal, setIsOpenModal}) => {

    const { informationUser } = useContext(AuthContext);

    const mainColor  = informationUser?.theme?.mainColor || '#483CE8'

    const deleteCookie = async () => {
        await fetchApi('/user/deleteCookieUser', 'GET')
        UrlRedirection('/')
    }

    const openModal = () => {
        if (setIsOpenModal) {
            setIsOpenModal(!isOpenModal);
        }
    } 
    


    return (
        <div className='Header-content' style={{ "backgroundColor": mainColor}}>
            <div className="modal-header">
                <div onClick={openModal} className="modal-sand">
                    <FaBars className={!isOpenModal ? 'icon-active': 'icon-desactive'} />
                </div>
            </div>
            <div className="logo-content">
                <NavLink to='/home' >
                    <img src={logo} alt="logo" />
                </NavLink>
            </div>
            <div className="entrprise-name">
                <h1>Fidelity Card</h1>
            </div>
            <div className="profil-content">
                <div className="profil-name">
                    <div className="params-header-content">
                        <NavLink to='/settings'>
                            <FaRegSun className='params-icon'/>
                        </NavLink>
                        <FaPowerOff onClick={deleteCookie}  className='logout-Icon'/>
                    </div>
                    <div className="account-header-content">
                        <div className="account-header">
                            {informationUser ? <p>{informationUser.name}</p> : <p>Loading...</p>}
                            <FaUserCircle className='profil-icon'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;