import React from 'react';
import SwapiService from '../../services/swapi-service';
import ItemDetails, { Record } from '../item-details';


const swapiService = new SwapiService();

const {
    getPerson,
    getPersonImage,
    getPlanet,
    getPlanetImage,
    getStarship,
    getStarshipImage
} = swapiService;

const PersonDetails = ( {itemId} ) => {
    return (
        <ItemDetails 
                    itemId={itemId}
                    getImageUrl={getImageUrl}
                    getData={getData}>
                    <Record field="gender" label="Gender" />
                    <Record field="birthYear" label="Birth year"/>
                    <Record field="eyeColor" label="Eye color"/>
        </ItemDetails>
    )
};

export { PersonDetails } ;