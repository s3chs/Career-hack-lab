import FixedHeader from "./Components/FixedHeader";
import MainContent from "./Components/MainContent";
import SideBar from "./Components/SideBar";
import "./App.css";

import React, { Component } from "react";

const clothes = [
  {
    name: "Obey",
    picture:
      "https://www.pacsun.com/dw/image/v2/AAJE_PRD/on/demandware.static/-/Sites-pacsun_storefront_catalog/default/dw65921b48/product_images/0097502750321NEW_00_016.jpg",
    color: "Black",
    price: 45,
  },
  {
    name: "Zoo York",
    picture:
      "https://media.titus.de/media/image/7f/a8/d1/zoo-york-t-shirts-zoo-monster-black-vorderansicht_600x600.jpg",
    color: "Red",
    price: 68,
  },
  {
    name: "Element",
    picture:
      "https://images-na.ssl-images-amazon.com/images/I/71R-jEEmZ8L._AC_UX679_.jpg",
    color: "Blue",
    price: 86,
  },
  {
    name: "The Kooples",
    picture: "https://i.ebayimg.com/images/g/l7MAAOSw9bZfEIvB/s-l300.jpg",
    color: "Green",
    price: 34,
  },
  {
    name: "The Kooples",
    picture: "https://i.ebayimg.com/images/g/l7MAAOSw9bZfEIvB/s-l300.jpg",
    color: "Green",
    price: 34,
  },
];

export default class App extends Component {
  state = {
    search: "",
    products: clothes,
    colorSearched: "",
  };

  ///BARRE DE PRIX///

  handleChange = (event) => {
    const value = event.target.value;

    // console.log("cest la value");

    const copyProducts = [...clothes];

    const filtered = copyProducts.filter(
      (product) => product.price <= this.state.search
    );

    console.log("je suis ici");
    console.log(filtered);

    this.setState({
      search: value,
      products: filtered,
    });
  };
  ////

  //// FILTRE COULEUR ///

  selectedColor = (event) => {
    const value = event.target.value;

    console.log(">>>>>", value);

    const copyProducts = [...clothes];
    const filtered = copyProducts.filter(
      (product) => product.color.toLowerCase() === value.toLowerCase()
    );

    this.setState({
      colorSearched: value,
      products: filtered,
    });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <FixedHeader />
        <MainContent searchClothes={this.state.products} />
        <SideBar
          handleChange={this.handleChange}
          selectedColor={this.selectedColor}
        />
      </div>
    );
  }
}
