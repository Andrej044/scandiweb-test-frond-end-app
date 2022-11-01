import React, {Component} from "react";
import {gql} from "@apollo/client";
import {graphql} from "@apollo/client/react/hoc";
import {BrowserRouter} from "react-router-dom";

import Header from "./layouts/Header";
import Main from "./layouts/Main";


const GET_DATA = gql`
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
        }
    }`

class App extends Component{
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

    addToCart = (e, product= {}) => {
        e.preventDefault();
        if(this.state.cart.length === 0 ) {
            this.setState({cart: [...this.state.cart, product]})
            return
        } else {
            this.setState({cart: [...this.state.cart, product]});
        }

    }
    duplicateProduct = (product = {}) => {
        this.setState({cart: [...this.state.cart, product]})
    }

    removeDuplicateProduct = (product) => {
        let cart = [...this.state.cart];
        let indexProduct = cart.indexOf(product);
        cart.splice(indexProduct,1)
        this.setState({
            cart: cart
        })

    }

    componentDidMount() {
        if(this.props.data.loading) console.log("loading"); // Make a loading page when data not loading yet
  }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevState.dataCategories.length > 0) return
        else this.setState({
            dataCategories: this.props.data.categories,
            dataCurrencies: this.props.data.currencies
        });
  }

    render(){
        return(
          <BrowserRouter>
            <Header
                data= {this.state}
                currencyChanger={this.handleCurrencyChange}
                duplicateProduct = {this.duplicateProduct}
                removeDuplicateProduct = {this.removeDuplicateProduct}
            />
            <h1 className="visualy-hidden">Online shop Scandiweb</h1>
            <Main
                data= {this.state.dataCategories}
                currency={this.state.currencies}
                findCurrency={this.findCurrency}
                handleClick = {this.addToCart}
            />
          </BrowserRouter>
        )
  }
}

const AppWidthData = graphql(GET_DATA)(App)
export default AppWidthData;