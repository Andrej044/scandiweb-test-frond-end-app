import React, {Component} from "react";
import ProductTitle from "./ProductTitle";
import Price from "./Price";
import Form from "./Form";
import Attributes from "../layouts/Attributes";


export default class  MiniCart extends Component {

   render() {
       const itemsCount = this.props.cart.length;
       const productList = this.props.cart.map ((item, index) => {
           return (
               <li key={index}>
                   <ProductTitle name = {item.name} brand = {item.brand}/>
                   <Price price = {item.price}/>
                   <Attributes attributes = {item.allAttributes} selectedAttributes = {item.attributes} />
                   {/*<Form attribute = {item.attributes}/>*/}
               </li>
           )
       })
       return(
           <div>
               <h2>My Bag, {itemsCount} items </h2>
               <ul>{productList}</ul>
           </div>
       )
   }
}