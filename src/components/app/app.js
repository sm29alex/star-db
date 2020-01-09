import React, {Component} from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from "../header";
import RandomPlanet from "../random-planet";

import './app.css';
import ErrorBoundry from "../error-boundry";
import { SwapiServiceProvider } from "../swapi-service-context";
import SwapiService from "../../services/swapi-service";
import DummySwapiService from '../../services/dummy-swapi-service';
import { PeoplePage, PlanetPage, StarshipPage } from '../pages';
import { StarshipDetails } from "../sw-components";

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
                    <Router>
                        <div className="stardb-app">
                            <Header onServiceChange={this.onServiceChange} />

                            {planet}
                            <Route path="/" 
                                render={() => <h2>Welcome to StarDB</h2>} 
                                exact />
                            <Route path="/people" component={PeoplePage} />
                            <Route path="/planets" component={PlanetPage} />
                            <Route path="/starships" component={StarshipPage} exact/>
                            <Route path="/starships/:id"
                                render = { ({match}) => {
                                    const {id} = match.params;
                                    return <StarshipDetails itemId={id}/>
                                }} />
                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundry>
        )
    }
}
