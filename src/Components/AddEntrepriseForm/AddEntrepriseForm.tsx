import React from 'react';

const AddEntrepriseForm = () => {
    return (
        <div className='AddEntrepriseForm'>
            <div className="entrepriseForm">
                <div className="titleFormEntreprise">
                    <h2>Création d'entreprise</h2>
                </div>
                <div className="inputNameContent">
                    <label>Nom de l'entreprise</label>
                    <input type="text" />
                </div>
                <div className="descriptionNameContent">
                    <label>description de l'entreprise</label>
                    <textarea></textarea>
                </div>
                <div className="submitButtonEntrepriseForm">
                    <button>Créer l'entreprise</button>
                </div>
            </div>
        </div>
    );
};

export default AddEntrepriseForm;