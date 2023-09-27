import React from 'react';
import { AiOutlineClose } from "react-icons/ai";

interface IConfirmationModalProps {
    isOpen: boolean;
    setIsOpen : React.Dispatch<React.SetStateAction<boolean>>;
    onConfirm : ()=> any;
    confimationtext : string;
}

const ConfirmationModal: React.FC<IConfirmationModalProps> = ({isOpen, setIsOpen, onConfirm, confimationtext}) => {

    const closeConfirmationModal = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className='confirmationModalContent'>
            <div className="ConfirmationModal">
                <div className="closeModalContent">
                    <AiOutlineClose onClick={closeConfirmationModal} />
                </div>
                <div className="titleModaleConfirmationContent">
                    <h2>Veuillez confirmer</h2>
                </div>
                <div className="textConfirmationContent">
                    <p>Veuillez confirmer de {confimationtext}</p>
                </div>
                <div className="confirmationModalButton">
                    <button className='mainStyle' onClick={onConfirm}>Confirmer</button>
                    <button className='secondaryStyle' onClick={closeConfirmationModal}>annuler</button>
                </div>
            </div>
            <div onClick={closeConfirmationModal} className='backScreenConfirmationModal'>
            </div>
        </div>
    );
};

export default ConfirmationModal;