import React,{Component} from "react";


export default class Products extends Component{
    render() {
            let products = this.props.categoryName[0] === undefined ?  [] : this.props.categoryName[0].products
        console.log(products)
            const productList = products.map(product => (
                <div key= { product.id} className="card">
                    <img src= {product.gallery[0]} alt=""/>
                    <p>{product.name}</p>
                    <p>{product.prices[0].amount}<span>{product.prices[0].currency.symbol}</span></p>
                </div>
            ))


        return(
            <>
                <h1>Category name</h1>
                <section>
                    <h2>Main Component</h2>
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