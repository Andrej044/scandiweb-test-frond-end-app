import React, {Component, createElement} from "react";

export default class CurrencySwitcher extends Component {
    state = {
        isShow: false
    }
    handleShowOn = () => {
        this.setState({
            isShow:true
        })
    }
    handleShowOff = () => {
        this.setState({
            isShow:false
        })
    }
    handleOff = () => {
        this.setState({isShow:false})
    }

    render(){
        const currencyChanger = this.props.currencyChanger;
        const {symbol:currencySymbol} = this.props.state.currencies;

        const currenciesList = this.props.currencies.map(currency => (
            <li
                className="currency-item"
                onClick={() => {
                currencyChanger(currency.currencyLabel,currency.currencySymbol );
                this.handleShowOff();
                }}
                key= {currency.currencyLabel}
                value={currency.currencyLabel}
            >
                {currency.currencySymbol} {currency.currencyLabel}
            </li>
        ));

        return(
            <>
                <span onClick= {this.handleShowOn}>{currencySymbol}</span>
                {this.state.isShow ? <ul className="currencySwitcher">{currenciesList}</ul> : null }
            </>
        )
    }
}