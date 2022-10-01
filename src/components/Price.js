import React, {Component} from "react";



export default class Price extends Component {
    render() {
        const {price} = this.props;
        const  amount = price[0] === undefined ? null : price[0].amount;
        const symbol = price[0] === undefined || price[0].currency === undefined ? null : price[0].currency.symbol;
        return (
            <>
                <span>{symbol}</span><span>{amount}</span>
            </>
        )
    }
}