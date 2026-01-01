import {starsWarsInfo} from "../utils/constants";
import style from "../css_modules/farGalaxy.module.css";

function StarWars() {
    return (
        <div className={style.farGalaxy}>
            <p>{starsWarsInfo}</p>
        </div>
    );
}

export default StarWars;
