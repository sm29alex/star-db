import React from 'react';
import ItemList from '../item-list';
import { withData } from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();
const { getAllPlanets, getAllPeople, getAllStarships } = swapiService; 

const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                { fn }
            </Wrapped>
        )
    }
}

const spanName = ({name}) => <span>{name}</span>;
const spanNameAndModel = ( {name,model} ) => <span>{name} ({model})</span>

const PersonList = withData(withChildFunction( ItemList, spanName), getAllPeople);

const PlanetList = withData(withChildFunction( ItemList, spanName), getAllPlanets);

const StarshipList = withData(withChildFunction( ItemList, spanNameAndModel), getAllStarships);

export { PersonList, PlanetList, StarshipList} ;