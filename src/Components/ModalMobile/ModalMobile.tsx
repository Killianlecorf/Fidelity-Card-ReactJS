import React from 'react';

interface modalMobileProps {
    isOpenModal : boolean;
    setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalMobile :React.FC<modalMobileProps> = ({isOpenModal, setIsOpenModal}) => {

    const closeModal = () => {
        if (isOpenModal === false) {
            setIsOpenModal(true)
        }
    }

    return (
        <div className={`modal-mobile ${isOpenModal ? 'modal-mobile-open' : 'modal-mobile-close'}`} onClick={closeModal}>
            <div className="">
                
            </div>
        </div>
    );
};

export default ModalMobile;