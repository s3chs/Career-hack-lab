import React, { Component } from "react";
import ItemCard from "./ItemCard";

export default class MainContent extends Component {

  render() {

    return (
      <div>
        {this.props.searchClothes.map((product, i) => (
          <ItemCard
            key={i}
            name={product.name}
            picture={product.picture}
            price={product.price}
          />
        ))}
      </div>
    );
  }
}
