import React, {Component} from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import PeoplePage from '../people-page';

import './app.css';
import ErrorBoundry from "../error-boundry";
import ErrorButton from "../error-button";

export default class App extends Component {

    state = {
        showRandomPlanet: true
    }

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        });
    };

    render() {

        const planet = this.state.showRandomPlanet ? <RandomPlanet/> : null;

        return (
            <ErrorBoundry>

                <div className="stardb-app">
                    <Header/>

                    {planet}

                    <div className="row mb2 button-row">
                    <button
                        className="toggle-planet btn btn-warning btn-lg"
                        onClick={this.toggleRandomPlanet}>
                        Toggle Random Planet
                    </button>
                    <ErrorButton />
                    </div>
                    <PeoplePage />
                </div>
            </ErrorBoundry>
        )
    }
}
