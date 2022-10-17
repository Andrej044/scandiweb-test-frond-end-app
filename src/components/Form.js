import React,{Component}  from "react";


export default class Form extends Component{
    state = {
        selectedOption: null,
    }

    handleChange = (e) => {
       if(e.target.checked){
           this.props.addAttributes({
                name: e.target.name,
                value: e.target.value,
            });
       }
            this.setState({
                selectedOption: e.target.value,
            })

    }

    componentDidMount() {
        let firstElem = this.props.attribute.items[0];
        this.setState({
            selectedOption:firstElem.value,
        })
        this.props.addAttributes({
            name: this.props.attribute.name,
            value:this.props.attribute.items[0].value
        })
    }


    render(){
        const {attribute} = this.props;
        const input = attribute.items.map( attr => (
                <label key={attr.id}>
                    {attr.displayValue}
                    <input
                        type="radio"
                        value={attr.value}
                        name={attribute.name}
                        onChange={this.handleChange}
                        checked={this.state.selectedOption === attr.value}
                         />
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