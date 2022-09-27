import React,{Component}  from "react";




export default class SizePicker extends Component{

    render(){
        return(
            <div className="sizePicker">
                <h3>Size:</h3>
                <form>
                    <label>
                        S
                        <input type="radio" value="s" name="size"/>
                    </label>
                    <label>
                        M
                        <input type="radio" value="M" name="size"/>
                    </label>
                    <label>
                        X
                        <input type="radio" value="x" name="size"/>
                    </label>
                </form>
            </div>
        )
    }
}