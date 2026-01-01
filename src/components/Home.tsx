import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { defaultHero, friends } from '../utils/constants';
import DreamTeam from './DreamTeam';
import FarGalaxy from './FarGalaxy';
import Hero from './Hero';

interface Props {
    changeHero: (hero: string) => void
}

const Home: React.FC<Props> = ({ changeHero }) => {
    let { heroId } = useParams() as { heroId: string };
    if (!friends.includes(heroId)) {
        heroId = defaultHero;
    }
    useEffect(() => {
        changeHero(heroId);
    }, [heroId]);
    return (
        <main className="clear-fix">
            <Hero hero={heroId} />
            <DreamTeam hero={heroId} />
            <FarGalaxy />
        </main>
    );
}

export default Home;
