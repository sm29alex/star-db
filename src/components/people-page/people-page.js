import React, {Component} from "react";
import SwapiService from "../../services/swapi-service";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import Row from '../row';

import './people-page.css';

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
                getData={this.swapiService.getAllPeople}
                renderItem={({name, gender, birthYear}) => `${name} (${gender}, ${birthYear})`}/>
        );

        const personDetails = <PersonDetails personId={this.state.selectedPerson}/>;
        return (
           <Row left={itemList} right={personDetails } />
        )
    }
}