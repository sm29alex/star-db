import React, {Component} from "react";
import SwapiService from "../../services/swapi-service";
import ItemList from "../item-list";
import ItemDetails from "../item-details";
import Row from '../row';

import './people-page.css';
import ErrorBoundry from "../error-boundry";
import { Record } from "../item-details/item-details";

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
            <ItemList
                onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPeople}>
                    {(i) => `${i.name}, ${i.birthYear}`}
            </ItemList>
        );

        const getImageUrl = this.swapiService.getPersonImage;
        const getData = this.swapiService.getPerson;
        const personDetails = (
            <ErrorBoundry>
                <ItemDetails 
                    itemId={this.state.selectedPerson}
                    getImageUrl={getImageUrl}
                    getData={getData}>
                    <Record field="gender" label="Gender" />
                    <Record field="birthYear" label="Birth year"/>
                    <Record field="eyeColor" label="Eye color"/>
                </ItemDetails>
            </ErrorBoundry>
        );
        
        return (
            <ErrorBoundry>
                <Row left={itemList} right={personDetails } />
           </ErrorBoundry>
        )
    }
}