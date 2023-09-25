import React from 'react';

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
        <div onClick={closeConfirmationModal} className='backScreenConfirmationModal'>
            <div className="ConfirmationModal">
                <div className="closeModalContent">

                </div>
                <div className="titleModaleConfirmationContent">

                </div>
                <div className="textConfirmationContent">
                    <button onClick={onConfirm}>Confirmer</button>
                </div>
                <div className="confirmationModalButton">

                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;