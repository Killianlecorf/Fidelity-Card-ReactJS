import React from 'react';
import logo from '../../Assets/img/logo-blanc.png';
import { FaUserCircle, FaRegSun, FaPowerOff, FaBars} from "react-icons/fa";
import fetchApi from '../../Utils/request'
import UrlRedirection from '../../Utils/UrlRedirection'

interface HeaderProps {
    setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  }

const Header: React.FC<HeaderProps> = ({setIsOpenModal}) => {

    const deleteCookie = async () => {
        await fetchApi('/user/deleteCookieUser', 'GET')
        UrlRedirection('/')
    }

    const openModal = () => {
        setIsOpenModal(true)
    }
    

    return (
        <div className='Header-content'>
            <div className="modal-header">
                <div onClick={openModal} className="modal-sand">
                    <FaBars />
                </div>
            </div>
            <div className="logo-content">
                <img src={logo} alt="logo" />
            </div>
            <div className="entrprise-name">
                <h1>Fidelity Card</h1>
            </div>
            <div className="profil-content">
                <div className="profil-name">
                    <div className="params-header-content">
                        <FaRegSun className='params-icon'/>
                        <FaPowerOff onClick={deleteCookie}  className='logout-Icon'/>
                    </div>
                    <div className="account-header-content">
                        <div className="account-header">
                            <p>Luzrod03</p>
                            <FaUserCircle className='profil-icon'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;