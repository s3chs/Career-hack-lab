import React, { Component } from 'react'

export default class ResetFilter extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.resetFilters} > Reset filters yeah boi dasswassup</button>
            </div>
        )
    }
}

