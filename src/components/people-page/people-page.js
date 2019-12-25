import React, {Component} from "react";
import SwapiService from "../../services/swapi-service";
import ItemList from "../item-list";
import PersonDetails from "../person-details";

export default class PeoplePage extends Component{

    swapiService = new SwapiService();

    state = {
        selectedPerson: 3
    }

    onPersonSelected = (id) => {
        this.setState((state) => {
            return {
                selectedPerson: id
            }
        })
    }

    render() {
        return (
            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList
                        onItemSelected={this.onPersonSelected}
                        getData={this.swapiService.getAllPeople}
                        renderItem={({name, gender, birthYear}) => `${name} (${gender}, ${birthYear})`}/>
                </div>
                <div className="col-md-6">
                    <PersonDetails personId={this.state.selectedPerson}/>
                </div>
            </div>
        )
    }
}