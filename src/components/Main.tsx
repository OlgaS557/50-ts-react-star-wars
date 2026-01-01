import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { aboutMePage, contactPage, homePage, starWarsPage } from "../utils/constants";
import AboutMe from './AboutMe';
import Contact from "./Contact";
import ErrorPage from './ErrorPage';
import Home from './Home';
import StarWars from "./StarWars";

interface Props{
    changeHero: (hero: string) => void
}

const Main: React.FC<Props> = ({ changeHero }) => {

    return (
        <Routes>
            {[aboutMePage, `${aboutMePage}/:heroId`].map(path => <Route
                key={path}
                path={path}
                element={<AboutMe changeHero={changeHero}/>} />)}
            <Route path={contactPage} element={<Contact />} />
            <Route path={starWarsPage} element={<StarWars />} />
            {["/", homePage, "/:heroId", `${homePage}/:heroId`].map(path => <Route
                key={path}
                path={path}
                element={<Home changeHero={changeHero} />} />)}
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )

}

export default Main;
