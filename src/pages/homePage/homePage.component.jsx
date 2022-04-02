import React, { Component } from "react";
import { HomeBanner } from "../../api/api";
import Login from "../Login";
 

class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const loadData =  () => {
      HomeBanner().then(response => {
     this.setState(response.data)      
   });
  
  
  }
  loadData();
 }
  
  render() {

   const image = this.state.image;
    
    return (
      <div>
        <Login />
      </div>
    );
  }
}

export default HomePage;
