import React from 'react';
import { AiOutlineClose } from "react-icons/ai";

interface IConfirmationModalProps {
    isOpen: boolean;
    setIsOpen : React.Dispatch<React.SetStateAction<boolean>>;
    onConfirm : ()=> any;
}

const ConfirmationModal: React.FC<IConfirmationModalProps> = ({isOpen, setIsOpen, onConfirm}) => {

    const closeConfirmationModal = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <div className="ConfirmationModal">
                <div className="closeModalContent">
                    <AiOutlineClose />
                </div>
                <div className="titleModaleConfirmationContent">
                    <h2>Veuillez confirmer</h2>
                </div>
                <div className="textConfirmationContent">
                    <button onClick={onConfirm}>Confirmer</button>
                </div>
                <div className="confirmationModalButton">

                </div>
            </div>
            <div onClick={closeConfirmationModal} className='backScreenConfirmationModal'>
            </div>
        </>
    );
};

export default ConfirmationModal;