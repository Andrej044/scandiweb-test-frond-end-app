import React,{Component} from "react";
import {NavLink} from "react-router-dom";
import logo from "../images/logo.svg";
import cartIco from "../images/empty_cart.svg";

import CurrencySwitcher from "../components/CurrencySwitcher";
import MiniCart from "../components/MiniCart";

export default class Header extends Component{
    state = {
        isVisibleCart : false
    }
    onClickHandler = () => {

        this.setState({
            isVisibleCart : !this.state.isVisibleCart
        })
    }
    render(){
        const {currencyChanger} = this.props;
        const {cart} = this.props.stateData
        const categoryList =  this.props.stateData.dataCategories.map(item => (
            <li key={item.name}>
               <NavLink to={`/${item.name}`} > { item.name}</NavLink>
            </li>
        ));
        const currencyList =  this.props.stateData.dataCurrencies.map(item => ({
            currencyLabel: item.label,
            currencySymbol: item.symbol
            })
        )
        let totalPrice = 0;
        cart.forEach(item => {
            totalPrice = totalPrice + item.price.amount
        })
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
                     <CurrencySwitcher currencies = {currencyList} currencyChanger = {currencyChanger} state = {this.props.stateData} />
                 </div>
                <div onClick={this.onClickHandler}>
                    <img src={cartIco} width="20" height="20" alt="cart icon" title="cart icon"/>
                    <span> Items count in cart: {cart.length} </span>
                </div>
                {this.state.isVisibleCart ? <MiniCart
                    cart = {cart}
                    totalPrice = {totalPrice}
                    duplicateProduct = {this.props.duplicateProduct}
                    removeDuplicateProduct = {this.props.removeDuplicateProduct}
                /> : null }
            </nav>
        </header>
        )
    }
}