import React from 'react';

interface IClientLine {
    Name : string; 
    lName : string;
    email?: string;
    phoneNumber?: number;
    address?: string;
    spendAmount?: number;
}

const ClientLine: React.FC<IClientLine> = ({Name, lName, email, phoneNumber, address, spendAmount}) => {

    console.log(Name);
    console.log(lName);
    console.log(email);
    console.log(phoneNumber);
    console.log(address);
    console.log(spendAmount);

    return (
        <div className='ClientLine'>
            .
        </div>
    );
};

export default ClientLine;


{/* <div className="NameContent">
                <p>{Name}</p>
            </div>
            <div className="lNameContent">
                <p>{lName}</p>
            </div>
            <div className="emailContent">
                <p>{email}</p>
            </div>
            <div className="addressContent">
                <p>{address}</p>
            </div>
            <div className="spendAmountContent">
                <p>{spendAmount}</p>
            </div>
            <div className="editDateContent">
                <p>{phoneNumber}</p>
            </div> */}