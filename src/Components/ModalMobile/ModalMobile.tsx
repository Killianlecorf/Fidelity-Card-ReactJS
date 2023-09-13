import React from 'react';
import { NavLink } from 'react-router-dom';

interface modalMobileProps {
    isOpenModal : boolean;
    setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalMobile: React.FC<modalMobileProps> = ({ isOpenModal, setIsOpenModal }) => {

    const closeModal = () => {
        setIsOpenModal(false); // Ferme le modal en mettant isOpenModal à false
    }

    return (
        <div className={`modal-mobile ${isOpenModal ? 'modal-mobile-open' : 'modal-mobile-close'}`} onClick={closeModal}>
            <li>
                <button>Statistique</button>
            </li>
            <li>
                <button>Répértoire Clients</button>
            </li>
            <li>
                <button>Boutique</button>
            </li>
            <li>
                <NavLink to='/entreprise'>
                    <button>Entreprise</button>
                </NavLink>
            </li>
        </div>
    );
};

export default ModalMobile;