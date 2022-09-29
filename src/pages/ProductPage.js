import React,{Component} from "react";

import SizePicker from "../components/SizePicker";
import ColorPicker from "../components/ColorPicker";
import  "../styles/ProductPage.css"

export default class ProductPage extends Component{
    state= {
        photoSrc: "",
    }
    componentDidMount() {
        const product = this.getProductByPathName();
        const productImage = product[0] === undefined ?  [] : product[0].gallery;
        this.setState({
            photoSrc: productImage[0],
        })
    }
    getProductByPathName = () => {
        const indexForCut = window.location.pathname.lastIndexOf("/");
        const productPathId = window.location.pathname.slice(indexForCut+1);
        const products = this.props.dataCategories.data[0] === undefined ?  [] : this.props.dataCategories.data[0].products;
        const  findProduct = products.filter((product) => {
            return product.id === productPathId
        })
        return findProduct
    }
    changePhotoHandler = () => {
        console.log("work")
    }
    render() {
        const  findProduct = this.getProductByPathName();
        const photoThumbnails = findProduct[0] === undefined ? (<li>Photo not found</li>) : findProduct[0].gallery.map((photoUrl, index) => (
            <li className="product-thumbnail" key={index} onClick={this.changePhotoHandler}>
                <img src={photoUrl} alt=""/>
            </li>
        ))

        return (
            <div className="product-page">
                <aside>
                    <nav>
                        <ul>
                            {photoThumbnails}
                        </ul>
                    </nav>
                </aside>
                <section>
                    <div className="product-page__main-photo">
                        <img src={this.state.photoSrc} alt=""/>
                    </div>
                </section>
                <section>
                    <h2>Brand</h2>
                    <h2>Title</h2>
                    <SizePicker/>
                    <ColorPicker/>
                    <div className="price">
                        <h3>Price:</h3>
                        <p>50$</p>
                    </div>
                    <button>Add to card</button>
                    <p>Description</p>
                </section>
            </div>
        )
    }

}