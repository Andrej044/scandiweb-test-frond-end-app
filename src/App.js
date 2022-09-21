import React, {Component} from "react";
import {gql} from "@apollo/client";

import Header from "./layouts/Header";
import Main from "./layouts/Main";


export default class App extends Component{
  constructor(props){
    super(props)
    this.state={
      dataProducts:[]
    }
  }
  componentDidMount() {
    const {client} = this.props;
    client
        .query({
          query: gql`
            query Query {
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
 
currencies{
    label
    symbol
  }
            }`
        })
        .then(result => this.setState({
            dataProducts: result.data
        }))
  }
    render(){
      console.log(this.state.dataProducts)
      const {categories, currencies} = this.state.dataProducts
        return(
          <>
            <Header/>
            <Main/>
          </>
        )
  }
}
