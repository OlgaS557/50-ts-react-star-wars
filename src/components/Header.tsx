import React from 'react';
import { characters } from '../utils/constants';
import Navigation from './Navigation';
import style from '../css_modules/header.module.css'

interface Props{
    hero: string
}

const Header: React.FC<Props> = ({hero}) => {
    return (
        <header className={`${style.header} position-relative`}>
            <Navigation hero={hero} />
            <h1 className="text-center py-4 mt-3">{characters[hero].name}</h1>
        </header>
    );
};

export default Header;
