import React, {ReactNode} from 'react';


interface IFieldCardProps {
    icon : ReactNode
    title : string;
}

const FieldCard: React.FC<IFieldCardProps> = ({icon, title}) => {
    return (
        <div className='FieldCard'>
            <div className="logoFieldContent">
                {icon}
            </div>
            <div className="titleFieldCard">
                <p>{title}</p>
            </div>
        </div>
    );
};

export default FieldCard;