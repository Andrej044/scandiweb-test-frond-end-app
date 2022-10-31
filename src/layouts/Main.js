import React,{Component} from "react";
import {Routes, Route} from "react-router-dom";

import AllPage from "../pages/AllPage";
import ClothesPage from "../pages/ClothesPage";
import TechPage from "../pages/TechPage";
import ProductPage from "../pages/ProductPage";



export default class Main extends Component{
    render(){
        return(
                <main>
                    <Routes>
                       <Route path = "/" element={<AllPage dataCategories = {this.props}/>}/>
                       <Route path = "/all" element={<AllPage dataCategories = {this.props}/>}/>
                       <Route path = "/clothes" element={<ClothesPage dataCategories = {this.props}/>}/>
                       <Route path = "/tech" element={<TechPage dataCategories = {this.props}/>}/>
                       <Route path = "/product/:id" element={<ProductPage dataCategories = {this.props}/>}/>
                        <Route path ="/cart" element={<div> Hello cart</div>}/>
                    </Routes>
                </main>
        )
    }
}