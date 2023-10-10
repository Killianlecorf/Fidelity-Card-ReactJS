import React from 'react';
import { NavLink } from 'react-router-dom';

interface INavigationSettings {
    firstTextNavigation: string;
    linkFirstNavigation: string;
    secondTextNavigation: string;
    linkSecondNavigation: string;
    thirdTextNavigation: string;
    linkThirdNavigation: string;
    isOpenFourth: boolean;
    FourthTextNavigation?: string;
    linkFourthNavigation?: string;
    isOpenFifth: boolean;
    FifthTextNavigation? : string;
    linkFifthNavigation?: string;
}

const NavigationSettings: React.FC<INavigationSettings> = ({firstTextNavigation, linkFirstNavigation, secondTextNavigation, linkSecondNavigation, thirdTextNavigation, linkThirdNavigation, isOpenFourth, FourthTextNavigation, linkFourthNavigation, isOpenFifth, FifthTextNavigation, linkFifthNavigation}) => {

    const addButtonNavigationSettings = () => {
        if (isOpenFourth) {
            return( <NavLink to={linkFourthNavigation || ""}>
                        <button>{FourthTextNavigation}</button>
                    </NavLink> 
                    )
        }
        if (isOpenFifth) {
            return ( <NavLink to={linkFifthNavigation || ""}>
                        <button>{FifthTextNavigation}</button>
                    </NavLink> 
        )
        }
        return null
    }

    return (
        <div className='NavigationSettings'>
            <NavLink to={linkFirstNavigation}>
                <button>{firstTextNavigation}</button>
            </NavLink>
            <NavLink to={linkSecondNavigation}>
                <button>{secondTextNavigation}</button>
            </NavLink>
            <NavLink to={linkThirdNavigation}>
                <button>{thirdTextNavigation}</button>
            </NavLink>
            {addButtonNavigationSettings()}
        </div>
    );
};

export default NavigationSettings;