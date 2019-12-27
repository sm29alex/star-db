import React, {Component} from "react";
import SwapiService from "../../services/swapi-service";
import ItemDetails from "../item-details";
import Row from '../row';

import './people-page.css';
import ErrorBoundry from "../error-boundry";
import { Record } from "../item-details/item-details";
import { PersonList, PersonDetails } from "../sw-components";

export default class PeoplePage extends Component{

    swapiService = new SwapiService();

    state = {
        selectedPerson: 3
    }

    onPersonSelected = (selectedPerson) => {
        this.setState((state) => {
            return {
                selectedPerson: selectedPerson
            }
        })
    }



    render() {

        const itemList = (
            <PersonList onItemSelected={this.onPersonSelected}>
                    {(i) => `${i.name}, ${i.birthYear}`}
            </PersonList>
        );

        const getImageUrl = this.swapiService.getPersonImage;
        const getData = this.swapiService.getPerson;
        const personDetails = (
            <ErrorBoundry>
                <PersonDetails itemId = {this.state.selectedPerson} />
            </ErrorBoundry>
        );
        
        return (
            <ErrorBoundry>
                <Row left={itemList} right={personDetails } />
           </ErrorBoundry>
        )
    }
}