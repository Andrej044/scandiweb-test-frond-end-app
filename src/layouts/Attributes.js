import React, {Component} from "react";

import Form from "../components/Form";
import ColorPicker from "../components/ColorPicker";
import SizePicker from "../components/SizePicker";

export default class Attributes extends Component{

    render() {
        const {attributes} = this.props;
        const attributesList = attributes.map( attr => (
            <div key={attr.id}>
                 <h3 >{attr.id}:</h3>
                <Form attribute = {attr} />
            </div>
        ))

        return(
            attributes.length > 0 ? <div>{attributesList}</div> : null
        )
    }
}