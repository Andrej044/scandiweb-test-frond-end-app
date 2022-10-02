import React,{Component}  from "react";


export default class Form extends Component{
    state = {
        value: null,
    }

    handleClick = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    render(){
        const {attribute} = this.props;
        console.log(attribute)
        const input = attribute.items.map(attr => (
                <label key={attr.id}>
                    {attr.displayValue}
                    <input type="radio" value={attr.value} name={attribute.name} onClick={this.handleClick}/>
                </label>

        ))
        return(
            <div className="form">
                <form>
                    {input}
                </form>
            </div>
        )
    }
}