import React, { Component } from "react";
import ItemCard from "./ItemCard";

const clothes = [
  {
    name: "Obey",
    picture: "https://www.pacsun.com/dw/image/v2/AAJE_PRD/on/demandware.static/-/Sites-pacsun_storefront_catalog/default/dw65921b48/product_images/0097502750321NEW_00_016.jpg",
    color: "Black",
    price: 45,
  },
  {
    name: "Zoo York",
    picture: "https://media.titus.de/media/image/7f/a8/d1/zoo-york-t-shirts-zoo-monster-black-vorderansicht_600x600.jpg",
    color: "Red",
    price: 68,
  },
  {
    name: "Element",
    picture: "https://images-na.ssl-images-amazon.com/images/I/71R-jEEmZ8L._AC_UX679_.jpg",
    color: "Blue",
    price: 86,
  },
  {
    name: "The Kooples",
    picture: "https://i.ebayimg.com/images/g/l7MAAOSw9bZfEIvB/s-l300.jpg",
    color: "Violet",
    price: 34,
  },
//   {
//     name: "Quiet",
//     picture:"https://www.snipes.fr/dw/image/v2/BDCB_PRD/on/demandware.static/-/Sites-snse-master-eu/default/dwd03bfb77/1593603_P4.jpg?sw=780&sh=780&sm=fit&sfrm=png",
//     color: "Brown",
//     price: 69,
//   },
];

export default class MainContent extends Component {
  render() {
    return (
      <div>
        {clothes.map((product, i) => (
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
