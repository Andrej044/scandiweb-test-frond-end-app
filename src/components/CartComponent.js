import React, {Component} from "react";
import ProductTitle from "../components/ProductTitle";
import Price from "../components/Price";
import Attributes from "../layouts/Attributes";
import PhotoSliderComponent from "./PhotoSliderComponent";

export default class CartComponent extends Component {

    render() {
        let uniqArr = [];
        let uniqueProducts =  this.props.cart.reduce((totalProduct, product) => {
            let newArr = product.attributes;
            if(totalProduct.length === 0) totalProduct.push(product);

            if(newArr.length === 0  ){
                newArr.push({
                    name:"null"
                });
            }else if(newArr[0] === undefined) {
                newArr.splice(0,1);
            } else if(newArr[0].name !== totalProduct[0].attributes[0].name){
                [newArr[0], newArr[1]] = [newArr[1], newArr[0]];
            }

            let str = JSON.stringify(product.name + product.brand) + JSON.stringify(newArr)
            if(!(uniqArr.includes(str))){
                totalProduct.push(product)
                uniqArr.push(str)
            }
            return totalProduct
        },[])
        uniqueProducts.splice(0,1)

        let stringifyProducts = this.props.cart.map( item => {
            return JSON.stringify(item);
        })

        const productList = uniqueProducts.map ((item, index) => {
            let stringifyItem = JSON.stringify(item);
            let countProducts = stringifyProducts.reduce((acc, strItem) => {
                acc = stringifyItem === strItem ? acc + 1 : acc;
                return acc;
            }, 0)

            return (
                <li key={index}>
                    <div>
                        <ProductTitle name = {item.name} brand = {item.brand}/>
                        <Price price = {item.price}/>
                        <Attributes attributes = {item.allAttributes} selectedAttributes = {item.attributes} />
                    </div>
                    <div>
                        <button onClick={()=>{
                            this.props.duplicateProduct(item)
                        }}>+</button>
                        <span>{countProducts}</span>
                        <button onClick={()=>{
                            this.props.removeDuplicateProduct(item)
                        }}>-</button>
                    </div>
                    <div>
                        {this.props.isCartPage ? <PhotoSliderComponent item={item}/>  : <img src={item.photoThumbnails} alt="thumbnail"/>}
                    </div>
                </li>
            )
        });
    return(
        <ul>{productList}</ul>
    )
    }
}