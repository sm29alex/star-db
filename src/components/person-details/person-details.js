import React, {Component} from "react";

import './person-details.css';
import SwapiService from "../../services/swapi-service";
import ErrorButton from "../error-button";
import ItemDetails, { Record } from "../item-details/item-details";

export default class PersonDetails extends Component {

    swapiService = new SwapiService();

    state = {
        person: null
    }

    updatePerson = () => {
        const {personId} = this.props;

        if (!personId) {
            return;
        };

        this.swapiService
            .getPerson(personId)
            .then( (person) => {
                this.setState( {person} );
            });
    }

    componentDidMount = () => {
        this.updatePerson();
    };

    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.personId != this.props.personId){
            this.updatePerson();
        }
    }

    render() {

        if (!this.state.person) {
            return (
                <span>Select a person from list</span>
            )
        }

        const {id, name, gender, bithYear, eyeColor } = this.state.person;
        const getData = this.swapiService.getPerson;
        const getImageUrl = this.swapiService.getPersonImage;

        return (
            <div className="person-details card">
                <img className="person-image"
                     src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt="No!!!"/>

                <ItemDetails
                    itemId={id}
                    getData={getData}
                    getImageUrl={getImageUrl}>
                        <Record field="gender" column="gender" />
                </ItemDetails>
            </div>
        )
    }

}