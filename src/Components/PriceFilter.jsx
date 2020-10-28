import React, { Component } from 'react'

export default class PriceFilter extends Component {
    render() {
        return (
            <div>
                <input type="range" min="0" max="100" step="10" />
            </div>
        )
    }
}
