import React from 'react';
import ItemList from '../item-list';
import { withData, withChildFunction, withSwapiService, compose } from '../hoc-helpers';


const spanName = ({name}) => <span>{name}</span>;
const spanNameAndModel = ( {name,model} ) => <span>{name} ({model})</span>

const mapPersonMethodsToProps = (service) => {
    return {
        getData: service.getAllPeople
    }
}

const mapPlanetMethodsToProps = (service) => {
    return {
        getData: service.getAllPlanets
    }
}

const mapStarshipMethodsToProps = (service) => {
    return {
        getData: service.getAllStarships
    }
}

const PersonList = compose(
    withSwapiService(mapPersonMethodsToProps),
    withData,
    withChildFunction(spanName)
)(ItemList);

const PlanetList = compose(
    withSwapiService(mapPlanetMethodsToProps),
    withData,
    withChildFunction(spanName)
)(ItemList);

const StarshipList = compose(
    withSwapiService(mapStarshipMethodsToProps),
    withData,
    withChildFunction(spanNameAndModel)
)(ItemList);

export { PersonList, PlanetList, StarshipList} ;