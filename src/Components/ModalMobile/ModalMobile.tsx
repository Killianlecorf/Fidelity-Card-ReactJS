import React from 'react';
import { NavLink } from 'react-router-dom';

interface modalMobileProps {
    isOpenModal : boolean;
    setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalMobile: React.FC<modalMobileProps> = ({ isOpenModal, setIsOpenModal }) => {

    const closeModal = () => {
        setIsOpenModal(false);
    }

    return (
        <div className={`separate-modal ${isOpenModal ? 'modal-mobile-open' : 'modal-mobile-close'}`}>
            <div className={`modal-mobile`} onClick={closeModal}>
                <li>
                    <NavLink to='/home'>
                        <button>Accueil</button>
                    </NavLink>
                </li>
                <li>
                    <button>Statistiques</button>
                </li>
                <li>
                    <NavLink to='/client/directory'>
                        <button>Répértoire Clients</button>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/entreprise'>
                        <button>Entreprise</button>
                    </NavLink>
                </li>
            </div>
        </div>
    );
};

export default ModalMobile;