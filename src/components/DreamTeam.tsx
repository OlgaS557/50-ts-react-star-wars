import React from 'react';
import { friends } from '../utils/constants';
import Friend from './Friend';

interface Props {
    hero: string
}

const DreamTeam: React.FC<Props> = ({hero }) => {
    const team = friends.filter(item => item !== hero);
    return (
        <section className="float-end w-50 row border me-2 ms-1 mt-1 mb-0">
            <h2 className="col-12 text-center">Dream Team</h2>
            {team.map((item, index) => (
                <Friend
                    key={index}
                    number={index + 1}
                    friend={item}
                />
            ))}
        </section>
    );
};

export default DreamTeam;
