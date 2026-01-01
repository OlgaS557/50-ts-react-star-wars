import { Component } from 'react';
import style from '../css_modules/farGalaxy.module.css';
import { base_url } from "../utils/constants";

interface State {
  isLoading: boolean,
  opening_crawl?: string
}

export class FarGalaxy extends Component<any, State> {

  state: State = {
    isLoading: true
  };

  componentDidMount() {
    const text = sessionStorage.getItem('opening_crawl');
    if (text) {
      this.setState({
        isLoading: false,
        opening_crawl: text
      })
    } else {
      const episode = Math.floor(Math.random() * 6) + 1;
      fetch(`${base_url}/v1/films/${episode}`)
        .then(response => response.json())
        .then(data => {
          this.setState({
            isLoading: false,
            opening_crawl: data.opening_crawl
          });
          sessionStorage.setItem('opening_crawl', data.opening_crawl);
        });
    }

  }

  render() {
    const text = this.state.isLoading ? 'Loading...' : this.state.opening_crawl;
    return (
      <div className="container">
        <p className={`${style.farGalaxy} text-justify`}>{text}</p>
      </div>
    );
  }
}

export default FarGalaxy;
