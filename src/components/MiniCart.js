import React, {Component} from "react";
import { NavLink} from "react-router-dom";

import CartComponent from "./CartComponent";

export default class  MiniCart extends Component {


    render() {
       const itemsCount = this.props.cart.length;
       return(
           <div>
               <h2>My Bag, {itemsCount} items </h2>
               <CartComponent
                   cart = {this.props.cart}
                   duplicateProduct = {this.props.duplicateProduct}
                   removeDuplicateProduct = {this.props.removeDuplicateProduct}
               />
               <div>
                   <p>Total</p>
                   <p><span></span>{this.props.totalPrice}</p>
               </div>
               <div>
                   <NavLink to={"/cart"}>
                        View Bag
                   </NavLink>
                   <button>Check out</button>
               </div>
           </div>
       )
   }
}