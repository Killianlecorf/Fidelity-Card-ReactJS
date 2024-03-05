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
            <p>{Name}</p>
            <p>{lName}</p>
            <p>{email}</p>
            <p>{phoneNumber}</p>
            <p>{address}</p>
            <p>{spendAmount}</p>
            <p>{editClient}</p>
        </div>
    );
};

export default ClientLine;
