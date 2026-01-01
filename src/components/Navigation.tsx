import React from 'react';
import { Link } from 'react-router-dom';
import { aboutMePage, contactPage, homePage, starWarsPage } from '../utils/constants';

interface Props{
    hero: string
}

const Navigation: React.FC<Props> = ({hero}) => {
    return (
        <nav className="fixed-top mt-2 ms-4 shadow-sm">
            <ul className="nav">
                <li> 
                    <Link className="nav-item btn btn-danger mx-1" to={`${homePage}/${hero}`}>Home</Link>
                </li>
                <li>
                    <Link className="nav-item btn btn-danger mx-1" to={`${aboutMePage}/${hero}`}>About Me</Link>
                </li>
                <li>
                    <Link className="nav-item btn btn-danger mx-1" to={starWarsPage}>Star Wars</Link>
                </li>
                <li>
                    <Link className="nav-item btn btn-danger mx-1" to={contactPage}>Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
