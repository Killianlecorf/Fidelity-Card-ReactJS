import React, {ReactNode} from 'react';
import { NavLink } from 'react-router-dom';


interface IFieldCardProps {
    icon : ReactNode
    title : string;
    url: string;
}

const FieldCard: React.FC<IFieldCardProps> = ({icon, title, url}) => {
    return (
        <div className='FieldCard'>
            <NavLink to={url}>
                <div className="logoFieldContent">
                    {icon}
                </div>
                <div className="titleFieldCard">
                    <p>{title}</p>
                </div>
            </NavLink>
        </div>
    );
};

export default FieldCard;