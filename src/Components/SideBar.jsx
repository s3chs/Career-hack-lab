import React, { Component } from 'react'
import PriceFilter from './PriceFilter'
import ColorsFilter from "./ColorsFilter";
import BrandsFilter from "./BrandsFilter";
import ResetFilter from "./ResetFilter";

export default class SideBar extends Component {
    render() {
        return (
            <div>
               <PriceFilter handleChange={this.props.handleChange} />
               <ColorsFilter selectedColor={this.props.selectedColor} /> 
               <BrandsFilter brandSelect={this.props.brandSelect} />
               <ResetFilter  resetFilters={this.props.resetFilters}/>
            </div>
        )
    }
}
