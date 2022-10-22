import React,{Component}  from "react";


export default class Form extends Component{
    state = {
        selectedOptionValue: null,
        isChecked: true
    }

    handleChange = (e) => {
        if(this.state.isChecked === false) return
        this.setState({
            selectedOptionValue: e.target.value,
            selectedOptionName: e.target.name
        })
        if(this.props.addAttributes === undefined) return;
        if(e.target.checked){
           this.props.addAttributes({
                name: e.target.name,
                value: e.target.value,
            });
       }
    }

    componentDidMount() {
        if (this.props.selectedAttributes === undefined){
            let firstElem = this.props.attribute.items[0];

            this.setState({
                selectedOptionValue: firstElem.value,
            })

            if (this.props.addAttributes === undefined) return;

            this.props.addAttributes({
                name: this.props.attribute.name,
                value: this.props.attribute.items[0].value
            })
        } else {
            // Ты работаешь сейчас над тем что бы в корзине выбранные аттрибуты соответсвовали аттрибутам на странице товара
            // и удалением возможности менять аттрибут
            this.props.selectedAttributes.forEach(attribute => {
                if (attribute.name === this.props.attribute.id ) {
                    this.setState({
                        selectedOptionValue: attribute.value,
                        isChecked: false
                    })
                }
            })
        }
    }



    render(){
        const {attribute} = this.props;
        // console.log(this.state.selectedOption)

        const input = attribute.items.map( attr => {
            return(
                <label key={attr.id}>
                    {attr.displayValue}
                    <input
                        type="radio"
                        value={attr.value}
                        name={attribute.name}
                        onChange={this.handleChange}
                        checked={this.state.selectedOptionValue === attr.value}
                    />
                </label>
            )
        });
        return(
            <div className="form">
                <form>
                    {input}
                </form>
            </div>
        )
    }
}