import React,{Component} from "react";
import {NavLink} from "react-router-dom";
import Product from "../components/Product";


export default class Products extends Component{

    findCurrency = (arr = [], findElement) => {
     return(arr.filter(item => {
          if(item.currency.label === findElement) return item
        }))
    }
    render() {
            const {currency} = this.props.currency;
            let products = this.props.categoryName[0] === undefined ?  [] : this.props.categoryName[0].products;
            const productList = products.map(product => {
                const currentCurrency =  this.findCurrency(product.prices, currency.label);
                return (
                    <NavLink to={`/product/${product.id}`} key= { product.id}>
                        <Product currency = {currentCurrency} product={product}/>
                    </NavLink>
                )
    })


        return(
            <>
                <section>
                    <h2>{this.props.categoryName[0] === undefined ? "Category name" : this.props.categoryName[0].name }</h2>
                    <div className="card-wrapper">
                        <div className="card-category">
                            {productList}
                        </div>
                    </div>
                </section>
            </>
        )
    }
}