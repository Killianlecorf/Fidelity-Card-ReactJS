import React from 'react';

interface IEditBoutiqueModal {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditBoutiqueModal:React.FC<IEditBoutiqueModal> = () => {
    return (
        <div className='EditBoutiqueModalBack'>
            
        </div>
    );
};

export default EditBoutiqueModal;