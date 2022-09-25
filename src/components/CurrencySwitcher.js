import React, {Component, createElement} from "react";

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

        if(event.target === elem){
            this.setState({
                isShow:false
            })
        } else if(event.target != span) {
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

        const currenciesList = this.props.currencies.map((currency,index) => (
            <li
                className="currency-item"
                onClick={() => {
                currencyChanger(currency.currencyLabel,currency.currencySymbol );
                }}
                id = {index}
                key= {currency.currencyLabel}
                value={currency.currencyLabel}
            >
                {currency.currencySymbol} {currency.currencyLabel}
            </li>
        ));

        return(
            <>
                <span className="currency__visible" onClick= {this.handleShowOn}>{currencySymbol}</span>
                {this.state.isShow ? <ul className="currencySwitcher">{currenciesList}</ul> : null }
            </>
        )
    }
}