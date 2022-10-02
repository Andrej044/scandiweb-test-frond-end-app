import React, {Component} from "react";
import {gql} from "@apollo/client";
import {BrowserRouter} from "react-router-dom";

import Header from "./layouts/Header";
import Main from "./layouts/Main";


export default class App extends Component{
    state = {
        dataCategories: [],
        dataCurrencies: [],
        isModal:false,
        currencies: {
            label: "USD",
            symbol: "$",
        },
        sizePicker:"null",
        colorPicker:"null",
        cart: [],
      }

    handleCurrencyChange = (currencyLabel, currencySymbol) => {
        this.setState({
           currencies : {
               label:currencyLabel,
               symbol:currencySymbol
           }
        })
    }
    findCurrency = (arr = [], findElement) => {
        return(arr.filter(item => {
            if(item.currency.label === findElement) return item
        }))
    }

    addToCart = e => {
        const cartArr = this.state.cart;
        cartArr.push({})
        this.setState({
            cart: cartArr
        })
    }

    componentDidMount() {
      this.props.client
          .query({
              query:gql`
              query{
               categories{
  name
  products{
    id
    name
    inStock
    gallery
    description
    category
    attributes{
      id
      name
      type
      items{
        displayValue
        value
        id
      }
    }
    prices{
      currency{
        label
        symbol
      }
      amount
    }
    brand 
  }
} 
 category{
  name
  products{
    id
    name
    inStock
    gallery
    description
    category
    attributes{
      id
      name
      type
      items{
        displayValue
        value
        id
      }
    }
    prices{
      currency{
        label
        symbol
      }
      amount
    }
    brand 
  }
} 
currencies{
  label
  symbol
}}`
          })
          .then(result => {
              this.setState({
                  dataCategories: result.data.categories,
                  dataCurrencies: result.data.currencies
              })
          })
  }
    render(){
        return(
          <BrowserRouter>
            <Header data= {this.state} currencyChanger={this.handleCurrencyChange} />
            <h1 className="visualy-hidden">Online shop Scandiweb</h1>
            <Main
                data= {this.state.dataCategories}
                currency={this.state.currencies}
                findCurrency={this.findCurrency}
            />
          </BrowserRouter>
        )
  }
}
