import React, {Component} from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";

import './app.css';
import ErrorBoundry from "../error-boundry";
import ErrorButton from "../error-button";
import { PersonDetails, PlanetDetails, StarshipDetails, PersonList, StarshipList, PlanetList } from "../sw-components";
import { SwapiServiceProvider } from "../swapi-service-context";
import SwapiService from "../../services/swapi-service";

export default class App extends Component {

    swapiServie = new SwapiService();

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
                <SwapiServiceProvider value={this.swapiServie}>
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
                        {/* <PeoplePage /> */}
                        <PersonList />
                        <PlanetList />
                        <StarshipList />
                        <PersonDetails itemId={11} />
                        <PlanetDetails itemId={5} />
                        <StarshipDetails itemId={9} />
                    </div>
                </SwapiServiceProvider>
            </ErrorBoundry>
        )
    }
}
