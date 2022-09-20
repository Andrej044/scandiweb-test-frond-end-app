import React,{Component} from "react";


export default class Header extends Component{
    render(){
        return(
        <header>
            <nav>
                <ul>
                    <li><a href="#">All</a></li>
                    <li><a href="#">Tecch</a></li>
                    <li><a href="#">Clothes</a></li>
                </ul>
                <ul>
                    <li>Currency</li>
                    <li>Basket</li>
                </ul>
            </nav>
        </header>
        )
    }
}