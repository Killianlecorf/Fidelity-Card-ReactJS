import React from 'react';

interface EntrepriseCardProps {
    name: string;
    description : string
}

const EntrepriseCard: React.FC<EntrepriseCardProps> = ({ name, description }) => {
    return (
        <div className='EntrepriseCard'>
            <div className="imageContent">
                <img src="https://businesspress.net/wp-content/uploads/2020/05/son-entreprise.jpg" />
            </div>
            <div className="informationEntreprise">
                <h2>{ name }</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default EntrepriseCard;