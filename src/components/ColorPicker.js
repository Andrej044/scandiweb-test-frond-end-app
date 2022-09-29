import React,{Component}  from "react";




export default class ColorPicker extends Component{

    render(){
        return(
            <div className="colorPicker">
                <h3>Color:</h3>
                <form>
                    <label>
                        Green
                        <input type="radio" value="green" name="color"/>
                    </label>
                    <label>
                        Red
                        <input type="radio" value="red" name="color"/>
                    </label>
                    <label>
                        Blue
                        <input type="radio" value="blue" name="color"/>
                    </label>
                </form>
            </div>
        )
    }
}