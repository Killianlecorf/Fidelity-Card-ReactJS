import React from 'react';

interface modalMobileProps {
    setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalMobile :React.FC<modalMobileProps> = ({setIsOpenModal}) => {

    const closeModal = () => {
        setIsOpenModal(false)
    }

    return (
        <div onClick={closeModal} className='modal-mobile'>
            <div className="">
                
            </div>
        </div>
    );
};

export default ModalMobile;