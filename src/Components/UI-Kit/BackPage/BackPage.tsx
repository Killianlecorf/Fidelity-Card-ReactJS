import React from 'react';
import { NavLink } from 'react-router-dom';
import { BiChevronLeftCircle } from "react-icons/bi";

interface IBackPageProps {
    urlRedirection : string;
}

const BackPage: React.FC<IBackPageProps>= ({urlRedirection}) => {
    return (
        <div className="backEntreprisePageContent">
                <div className="backEntreprisePage">
                    <NavLink to={urlRedirection}>
                        <div className='backChevronEntreprise'>
                            <BiChevronLeftCircle/>
                        </div> 
                        <div className="backTitleEntreprise">
                            <p>Retour au entreprise</p>
                        </div>
                    </NavLink>
                </div>
            </div>
    );
};

export default BackPage;