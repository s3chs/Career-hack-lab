import React, { Component } from "react";

export default class BrandsFilter extends Component {
  render() {
    return (
      <div>
        <input type="checkbox" name="Obey" onClick={this.props.brandSelect} />
        <label>Obey</label>
        <input type="checkbox" name="Zoo York" onClick={this.props.brandSelect} />
        <label>Zoo York</label>
        <input type="checkbox" name="Element" onClick={this.props.brandSelect} />
        <label>Element</label>
        <input type="checkbox" name="The Kooples" onClick={this.props.brandSelect} />
        <label>The Kooples</label>
      </div>
    );
  }
}
