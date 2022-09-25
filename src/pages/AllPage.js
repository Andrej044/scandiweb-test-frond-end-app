import React,{Component} from "react";
import Products from "../layouts/Products";

export default class AllPage extends Component{
    render(){
        const categoryAll = this.props.dataCategories.data.filter(item => {
            return item.name === "all"
        })
        return(
                <>
                    <Products categoryName= {categoryAll} currency = {this.props.dataCategories}/>
                </>
        )
    }
}