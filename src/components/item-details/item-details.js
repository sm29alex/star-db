import React, {Component} from "react";

import './item-details.css';
import ErrorButton from "../error-button";



const Record = (props) => {
    const { label, field, item } = props;

    return (
        <li className="list-group-item">
            <span className="term">{label}</span>
            <span>{ item[field]}</span>
        </li>
    )
}

export { Record };


export default class ItemDetails extends Component {

    state = {
        item: null,
        image: null
    }

    updateItem = () => {
        
        const { itemId, getData, getImageUrl } = this.props;

        if (!itemId) {
            return;
        };

        getData(itemId)
            .then( (item) => {
                this.setState( { item, image: getImageUrl(item) } );
            });
    }

    componentDidMount = () => {
        this.updateItem();
    };

    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.itemId !== this.props.itemId ||
            prevProps.getData !== this.props.getData ||
            prevProps.getImageUrl !== this.props.getImageUrl){
            this.updateItem();
        }
    }

    render() {

        const {item, image} = this.state;

        if (!item) {
            return (
                <span>Select a item from list</span>
            )
        }

        const { name } = item;

        return (
            <div className="item-details card">
                <img className="item-image"
                     src={image} alt="No!!!"/>

                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        {React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, { item });
                        })}
                    </ul>
                    <ErrorButton />
                </div>
            </div>
        )
    }

}
