import React from 'react';
import { characters } from '../utils/constants';

interface Props {
    hero: string
}

const Hero: React.FC<Props> = ({ hero }) => {
    return (
        <section className="float-start w-25 me-2">
            <img className="w-100" src={characters[hero].img} alt="Luke Skywalker" title="Luke Skywalker" />
        </section>
    );
};

export default Hero;
