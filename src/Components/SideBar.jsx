import React, { Component } from 'react'
import PriceFilter from './PriceFilter'
import ColorsFilter from "./ColorsFilter";
import BrandsFilter from "./BrandsFilter";

export default class SideBar extends Component {
    render() {
        return (
            <div>
               <PriceFilter handleChange={this.props.handleChange} />
               <ColorsFilter selectedColor={this.props.selectedColor} /> 
               <BrandsFilter/>
            </div>
        )
    }
}
