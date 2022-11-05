import React,{Component} from "react";

import Price from "../components/Price";
import ProductTitle from "../components/ProductTitle";
import Attributes from "../layouts/Attributes";

import  "../styles/ProductPage.css"


export default class ProductPage extends Component{
    state = {
        photoSrc: "",
        selectedAttributes: []
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

    changePhotoHandler = (e) => {
        const src = e.target.getAttribute("src");
        this.setState({
            photoSrc : src
        })
    }

    addAttributes = (attribute = {}) => {
        let [arrAttributes] = [this.state.selectedAttributes];
       if(arrAttributes.length > 0) {
            arrAttributes.forEach((attr, index) => {
                if(attribute.name === attr.name){
                     arrAttributes.splice(index,1);
                }
            })
       }

        arrAttributes.push({
            name: attribute.name,
            value: attribute.value
        })
        this.setState({
            selectedAttributes: arrAttributes
        })
    }

    clearAttributes = () => {
        const arrAttributes = this.state.selectedAttributes.map(attribute =>{
                return attribute;
            })

        this.setState({
            selectedAttributes: arrAttributes
        });
    }

    render() {
        const {findCurrency, currency, handleClick} = this.props.dataCategories;
        const  findedProduct = this.getProductByPathName();
        const photoThumbnails = findedProduct[0] === undefined ? (<li>Photo not found</li>) : findedProduct[0].gallery.map((photoUrl, index) => (
            <li className="product-thumbnail" key={index} >
                <img onClick={this.changePhotoHandler} src={photoUrl} alt=""/>
            </li>
        ));

        const brand = findedProduct[0] === undefined ? "Brand not found" : findedProduct[0].brand;
        const name = findedProduct[0] === undefined ? "Name not found" : findedProduct[0].name;
        const description = findedProduct[0] === undefined ? (<p>Description not found</p>) : findedProduct[0].description;
        const price = findedProduct[0] === undefined ? ["Price not found"] : findCurrency(findedProduct[0].prices, currency.label);
        const attributes = findedProduct[0] === undefined ? [] : findedProduct[0].attributes;
        const selectedAttributes = this.state.selectedAttributes;

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
                    <ProductTitle brand = {brand} name = {name}/>
                    <Attributes attributes={attributes} addAttributes = {this.addAttributes}/>
                    <div className="price">
                        <h3>Price:</h3>
                        <Price price={price[0]}/>
                    </div>
                    <button onClick={(e) => {
                        handleClick(e, {
                            brand:brand,
                            name:name,
                            price:price[0],
                            attributes:selectedAttributes,
                            allAttributes : attributes,
                            allPhoto:findedProduct[0].gallery,
                            photoThumbnails: findedProduct[0].gallery[0]
                        }, this.clearAttributes())
                    }}>Add to card</button>
                    <div className="description" dangerouslySetInnerHTML={{__html:description}}></div>
                </section>
            </div>
        )
    }

}