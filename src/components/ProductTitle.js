import React, {Component} from "react";



export default class  ProductTitle extends Component {

    render() {
        const brand = this.props.brand;
        const name = this.props.name;
        return(
           <>
               <h2>{brand}</h2>
               <p>{name}</p>
           </>
        )
    }
}