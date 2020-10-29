import React, { Component } from 'react'

export default class PriceFilter extends Component {

    // Pas besoin de state + setstate vu qu'on a fait remonter le state à App.js

    // state = {
    //     search:"",
    // }

    // handleChange = (event) => {

    // const value = event.target.value
    
    // this.setState({
    //     search: value,
    // })

    // }

    render() {

        return (

            <div>
            <h3>Price Max</h3>
                <input type="range" min="0" max="100" onChange={this.props.handleChange} />
            </div>
        )
    }
}
