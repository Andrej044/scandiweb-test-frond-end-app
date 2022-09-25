import React,{Component} from "react";
import {NavLink} from "react-router-dom";
import logo from "../images/logo.svg"
import CurrencySwitcher from "../components/CurrencySwitcher";


export default class Header extends Component{
    render(){
        const {currencyChanger} = this.props
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
                    <img src={logo} width="31" height="30" alt="logo" title="logo"/>
                </span>
                 <div className="currencySwitcher">
                     <CurrencySwitcher currencies = {currencyList} currencyChanger = {currencyChanger} state = {this.props.data} />
                 </div>

            </nav>
        </header>
        )
    }
}