import React from 'react';
import "../css_modules/contact.module.css";
import { base_url, periodMonth } from "../utils/constants";

interface State {
    planets: string[]
}
interface Planet{
    name: string
}

class Contact extends React.Component<any, State> {
    state: State = {
        planets: ['wait...']
    }


    fillPlanets(url: string) {
        fetch(url)
            .then(response => response.json())
            .then((json: Planet[]) => json.map(item => item.name))
            .then(planets => {
                this.setState({ planets });
                let info = {
                    listPlanets: planets,
                    time: Date.now()
                };
                localStorage.setItem('planets', JSON.stringify(info));
            });
    }

    componentDidMount() {
        let planets = JSON.parse(localStorage.getItem('planets')!);
        if (!planets || (Date.now() - planets.time) > periodMonth) {
            this.fillPlanets(`${base_url}/v1/planets`);
        } else {
            this.setState({ planets: planets.listPlanets });
        }
    }


    render() {
        return (
            <div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    console.log(e.currentTarget.planet.value);
                    console.log(e.currentTarget.firstname.value);
                }}>
                    <label>First Name
                        <input type="text" name="firstname" placeholder="Your name.." />
                    </label>
                    <label>Planet
                        <select name="planet">{
                            this.state.planets.map((item, index) => <option value={item} key={index}>{item}</option>)
                        }
                        </select>
                    </label>
                    <label>Subject
                        <textarea name="subject" placeholder="Write something.." />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Contact;
