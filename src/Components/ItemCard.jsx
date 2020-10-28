import React, { Component } from 'react'
import "../App.css";


export default class ItemCard extends Component {

    render() {

        console.log(this.props)
        return (
            <div className="product">

            <p>{this.props.name}</p>
            <img src={this.props.picture} alt="maxlebolosse"></img>
            <p>{this.props.price} ¥</p>

                {/* <h3>{props.name}</h3>
                <img src={props.picture}></img>
                <p>{props.price} ¥</p> */}
            </div>
        )
    }
}
