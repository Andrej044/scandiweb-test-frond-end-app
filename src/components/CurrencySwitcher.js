import React, {Component} from "react";

export default class CurrencySwitcher extends Component {
    state = {
        isShow: false
    }
    handleShowOn = () => {
        this.setState({
            isShow: true
        })
    }

    listener = (event) => {
        const elem = document.querySelector(".currency-item:first-child");
        const span = document.querySelector(".currency__visible")

        if(event.target === elem || event.target != span){
            this.setState({
                isShow:false
            })
        }
    }
    componentDidMount() {
        document.addEventListener("click", this.listener)
    }

    componentWillUnmount() {
        document.addEventListener("click", this.listener)
    }

    render(){
        const currencyChanger = this.props.currencyChanger;
        const {symbol:currencySymbol} = this.props.state.currencies;
        // console.log(currencySymbol)
        const currenciesList = this.props.currencies.map((currency,index) => {
            // console.log(currency)
            return (
            <li
                className="currency-item"
                onClick={() => {
                currencyChanger(currency.currencyLabel, currency.currencySymbol );
                }}
                id = {index}
                key= {currency.currencyLabel}
                value={currency.currencyLabel}
            >
                {currency.currencySymbol} {currency.currencyLabel}
            </li>
        )});

        return(
            <>
                <span className="currency__visible" onClick= {this.handleShowOn}>{currencySymbol}</span>
                {this.state.isShow ? <ul className="currencySwitcher">{currenciesList}</ul> : null }
            </>
        )
    }
}