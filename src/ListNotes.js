import React, { Component } from 'react';


/* const Fauzi = () => <div>fauzi</div> */
class ListNotes extends Component {

  render() {
    return (
      <div>
      <div className="box-name">{this.props.data.notes}</div>
      </div>
    );
  }
  
}

export default ListNotes;
