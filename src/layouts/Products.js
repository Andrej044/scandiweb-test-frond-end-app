import React,{Component} from "react";


export default class Products extends Component{

    findCurrency = (arr = [], findElement) => {
      let findedCurrency =  arr.filter(item=>{
          if(item.currency.label === findElement) return item
        })
        return findedCurrency
    }
    render() {
            const {currency} = this.props.currency
            let products = this.props.categoryName[0] === undefined ?  [] : this.props.categoryName[0].products
            const productList = products.map(product => {
              const currentCurrency =  this.findCurrency(product.prices, currency.label);
                  return (
                      <div key= { product.id} className="card">
                        <img src= {product.gallery[0]} alt=""/>
                        <p>{product.name}</p>
                        <p>{currentCurrency[0].amount}<span>{currentCurrency[0].currency.symbol}</span></p>
                    </div>)
    })


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