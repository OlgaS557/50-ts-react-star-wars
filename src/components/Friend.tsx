import React from 'react';
import { Link } from 'react-router-dom';
import style from '../css_modules/borderRound.module.css';
import { characters } from '../utils/constants';

interface Props{
    friend: string,
    number: number
}

const Friend: React.FC<Props> = ({ friend, number }) => {

    let friendStyle = "col-4 p-1 ";
    if (number === 7) {
        friendStyle = friendStyle + style.borderLeft;
    }
    if (number === 9) {
        friendStyle = friendStyle + style.borderRight;
    }
    return (
        <Link className={friendStyle} to={`/home/${friend}`}>
            <img
                className='w-100'                
                src={characters[friend].img}
                alt={characters[friend].name}
            />
        </Link>
    );
};

export default Friend;
