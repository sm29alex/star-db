import React, {Component} from "react";

import SwapiService from "../../services/swapi-service";

import './random-planet.css'

export default class RandomPlanet extends Component {

    swapiService = new SwapiService();

    state = {
        planet: {}
    }

    constructor() {
        super();
        this.updatePlaner();
    }

    onPlanetLoaded = (planet) => {
        this.setState({planet});
    };

    updatePlaner() {
        const id = 7; //Math.floor(Math.random()*25) + 2;
        this.swapiService.getPlanet(id)
            .then(this.onPlanetLoaded);
    }

    render() {

        const { planet: { id, name, population, rotationPeriod, diameter} } = this.state;

        return (
            <div className="random-planet jumbotron rounded">
                <img className="planet-image"
                     src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}/>

                <div>
                    <h4>{name}</h4>
                    <ul className="list-group list-group-item">
                        <span className="term">Population</span>
                        <span>{population}</span>
                    </ul>
                    <ul className="list-group list-group-item">
                        <span className="term">Rotation Period</span>
                        <span>{rotationPeriod}</span>
                    </ul>
                    <ul className="list-group list-group-item">
                        <span className="term">Diameter</span>
                        <span>{diameter}</span>
                    </ul>
                </div>
            </div>
        )
    }

}