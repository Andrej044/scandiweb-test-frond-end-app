import React, {Component} from "react";

import CartComponent from "../components/CartComponent";

export default class CartPage extends Component{

    render(){
        const isCartPage = "true";
        return(
            <>
                <h2>Cart</h2>
                <CartComponent
                    cart = {this.props.cart}
                    duplicateProduct = {this.props.duplicateProduct}
                    removeDuplicateProduct = {this.props.removeDuplicateProduct}
                    isCartPage = {isCartPage}
                />
            </>
        )
    }
}
