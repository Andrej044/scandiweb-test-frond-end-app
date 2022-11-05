import React, {Component} from "react";


export default class PhotoSliderComponent extends Component {

    render() {
        let images = this.props.item.allPhoto.map((photo, index) => (<img key={index} src={photo} alt=""/>))
        return(
            <>
                <div>{images}</div>
                <button>Prev</button>
                <button>Next</button>
            </>
        )
    }
}