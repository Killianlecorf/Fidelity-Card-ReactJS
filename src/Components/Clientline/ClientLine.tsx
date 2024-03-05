import React from 'react';

interface IClientLine {
    Name : string; 
    lName : string;
    email?: string;
    phoneNumber?: number;
    address?: string;
    spendAmount?: number;
    editClient: string;
}

const ClientLine: React.FC<IClientLine> = ({Name, lName, email, phoneNumber, address, spendAmount, editClient}) => {

    console.log(Name);
    console.log(lName);
    console.log(email);
    console.log(phoneNumber);
    console.log(address);
    console.log(spendAmount);
    console.log(editClient);

    return (
        <div className='ClientLine'>
            <div className="fullnameClientLine">
                <div>
                    <p>{Name}</p>
                </div>
                <div>
                    <p>{lName}</p>
                </div>
            </div>
            <div className="adresseClientLine">
                <p>{address}</p>
            </div>
            <div className="contentInformationClientLine">
                <p>{email}</p>
                <p>{phoneNumber}</p>
            </div>
            <div className="amountClientLine">
                <p>{spendAmount} €</p>
            </div>
            <div className="dateClientLine">
                <p>{editClient}</p>
            </div>
        </div>
    );
};

export default ClientLine;
