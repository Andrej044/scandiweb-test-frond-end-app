import React,{Component} from "react";
import Price from "./Price";

export default class Product extends Component{
    render() {
        const [currency] = this.props.currency;
        // console.log(currency)
        return(
            <div  className="card">
                <img src= {this.props.product.gallery[0]} alt=""/>
                <p>{this.props.product.brand} {this.props.product.name}</p>
                <p><Price price={currency}/></p>
            </div>
        )
    }
}