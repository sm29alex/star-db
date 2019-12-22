import React, { Component } from "react";

import './item-list.css';

export default class ItemList extends Component {

    render() {
        return (
            <ul className="item-list group-list">
                <li className="list-group-item">
                    Luke Skywalker
                </li>
                <li className="list-group-item">
                    Darth Vader
                </li>
                <li className="list-group-item">
                    R2-D2
                </li>
            </ul>
        )
    }

}