import React, {Component} from "react";



export default class Price extends Component {
    render() {
        const {price} = this.props;
        const  amount = price === undefined ? null : price.amount;
        const symbol = price === undefined || price.currency === undefined ? null : price.currency.symbol;
        return (
            <>
                <span>{symbol}</span><span>{amount}</span>
            </>
        )
    }
}