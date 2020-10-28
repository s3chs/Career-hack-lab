import React, { Component } from 'react'

export default class ColorsFilter extends Component {
    render() {
        return (
            <div className="box-row">

                <button onClick={this.props.selectedColor}  value="Green" className="green box">GREEN</button>
                <button onClick={this.props.selectedColor}  value="Red" className="red box">RED</button>
                <button onClick={this.props.selectedColor}  value="Black" className="black box">BLACK</button>
                <button onClick={this.props.selectedColor}  value="Blue" className="blue box">BLUE</button>

            </div>
        )
    }
}
