import React, {Component} from "react";

export default class App extends Component{
  constructor(props){
    super(props)
    this.state={}
  }
  
  render(){
    return(
      <>
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
        <main>
          <h1>Category name</h1>
          <section>
              <ul>
                <li>Product 1</li>
                <li>Product 2</li>
                <li>Product 3</li>
                <li>Product 4</li>
                <li>Product 5</li>
                <li>Product 6</li>
              </ul>
          </section>
        </main>
      </>
    )
  }
}
