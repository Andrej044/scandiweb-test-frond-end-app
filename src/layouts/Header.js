import React,{Component} from "react";
import {NavLink} from "react-router-dom";
import logo from "../images/logo.svg";
import cartIco from "../images/empty_cart.svg";

import CurrencySwitcher from "../components/CurrencySwitcher";


export default class Header extends Component{
    render(){
        const {currencyChanger} = this.props;
        const {cart} = this.props.data
        const categoryList =  this.props.data.dataCategories.map(item => (
            <li key={item.name}>
               <NavLink to={`/${item.name}`} > { item.name}</NavLink>
            </li>
        ));
        const currencyList =  this.props.data.dataCurrencies.map(item => ({
            currencyLabel: item.label,
            currencySymbol: item.symbol
            })
        )
        return(
        <header>
            <nav>
                <ul>
                    {categoryList}
                </ul>
                <span>
                    <NavLink to={"/all"}>
                        <img src={logo} width="31" height="30" alt="logo" title="logo"/>
                    </NavLink>
                </span>
                 <div className="currencySwitcher">
                     <CurrencySwitcher currencies = {currencyList} currencyChanger = {currencyChanger} state = {this.props.data} />
                 </div>
                <span>
                    <img src={cartIco} width="20" height="20" alt="cart icon" title="cart icon"/>
                    <span> Items count in cart: {cart.length} </span>
                </span>
            </nav>
        </header>
        )
    }
}