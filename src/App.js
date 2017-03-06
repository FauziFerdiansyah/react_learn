import React, { Component } from 'react';
import Data_content from './Data_content.js';


/* const Fauzi = () => <div>fauzi</div> */
class Learn extends Component {
  
  constructor(props) {
    super(props);

      this.state = {};
  }

  render() {
    return (
      <div>
       
      <div><Data_content data={this.state} /></div> 
      </div>
    );
  }
  
}
/* <h3>Learn React With <Vendor1 /> & <Vendor2 /> <helloRT /></h3> */
class Vendor1 extends Component {
  render() {
    return (
      <label>Fauzi</label>
    );
  }
}
class Vendor2 extends Component {
  render() {
    return (
      <label>Yaman</label> 
    );
  }
}

export default Learn;
