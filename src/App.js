import React, {Component} from "react";
import Header from "./layouts/Header";
import Main from "./layouts/Main";


export default class App extends Component{
  constructor(props){
    super(props)
    this.state={}
  }
  
  render(){
    return(
      <>
        <Header/>
        <Main/>
      </>
    )
  }
}
