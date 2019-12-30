import React, {Component} from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";

import './app.css';
import ErrorBoundry from "../error-boundry";
import { SwapiServiceProvider } from "../swapi-service-context";
import SwapiService from "../../services/swapi-service";
import DummySwapiService from '../../services/dummy-swapi-service';
import { PeoplePage, PlanetPage, StarshipPage } from '../pages';

export default class App extends Component {

    state = {
        swapiService: new SwapiService()
    }

    onServiceChange = () => {

        this.setState( ({swapiService}) => {
            const Service = swapiService instanceof DummySwapiService ?
                            SwapiService : DummySwapiService;
            console.log(`on service change to ${Service.name}`);
            return {
                swapiService: new Service()
            }
        })
    }

    render() {

        const planet = <RandomPlanet/> ;

        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <div className="stardb-app">
                        <Header onServiceChange={this.onServiceChange} />

                        {planet}

                        <PeoplePage />
                        <PlanetPage />
                        <StarshipPage />
                    </div>
                </SwapiServiceProvider>
            </ErrorBoundry>
        )
    }
}
