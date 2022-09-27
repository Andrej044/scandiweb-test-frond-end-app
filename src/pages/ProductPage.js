import React,{Component} from "react";

import SizePicker from "../components/SizePicker";

export default class ProductPage extends Component{

    render() {
        return (
            <div>
                <aside>
                    <nav>
                        <ul>
                            <li>image-tumb</li>
                            <li>image-tumb</li>
                            <li>image-tumb</li>
                        </ul>
                    </nav>
                </aside>
                <section>
                    <img src="" alt=""/>
                </section>
                <section>
                    <h2>Brand</h2>
                    <h2>Title</h2>
                    <SizePicker/>
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
                    <div className="price">
                        <h3>Price:</h3>
                        <p>50%</p>
                    </div>
                    <button>Add to card</button>
                    <p>Description</p>
                </section>
            </div>
        )
    }

}