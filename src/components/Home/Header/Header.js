import React from 'react';
import HeaderBusinessInfo from '../HeaderBusinessInfo/HeaderBusinessInfo';
import HeaderMiddle from '../HeaderMiddle/HeaderMiddle';
import Navigation from '../Navigation/Navigation';

const Header = () => {
    return (
        <div className="header-area">
            <Navigation></Navigation>
            <HeaderMiddle></HeaderMiddle>
            <HeaderBusinessInfo></HeaderBusinessInfo>
        </div>
    );
};

export default Header;