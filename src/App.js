import React, { Component } from 'react';
import Data_content from './Data_content.js';
import Loading from 'react-loading-bar'
import 'react-loading-bar/dist/index.css'

/* const Fauzi = () => <div>fauzi</div> */
class Learn extends Component {
  
  constructor(props) {
    super(props);

      this.state = {
        show: true
      };
  }

  componentDidMount() {
    
    setTimeout(() => this.setState({ show: true }), 0); 
  }

  render() {
    const { show } = this.state;
    
    if(show) {
      setTimeout(() => this.setState({ show: false }), 0); 
    }
    
    return (
      <div>
       <Loading
          show={this.state.show}
          color="white"
        />
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
