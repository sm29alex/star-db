import React from 'react';

import ItemDetails, { Record } from '../item-details';

import { SwapiServiceConsumer } from '../swapi-service-context';
import { withSwapiService } from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';

const StarshipDetails = ({ itemId }) => {
          return (
            <ItemDetails>
              <Record field="model" label="Model" />
              <Record field="length" label="Length" />
              <Record field="costInCredits" label="Cost" />
            </ItemDetails>
          );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getDate: swapiService.getStarship,
    getImageUrl: swapiService.getStarshipImage
  }
}
export default withSwapiService(StarshipDetails, mapMethodsToProps);