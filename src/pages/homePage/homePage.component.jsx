import React, { Component } from "react";
import { HomeBanner } from "../../api/api";
import InstitutionalLogin from "../InstitutionalLogin";
 

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
        <InstitutionalLogin />
      </div>
    );
  }
}

export default HomePage;
