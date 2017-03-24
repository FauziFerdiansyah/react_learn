import React, { Component } from 'react';


/* const Fauzi = () => <div>fauzi</div> */
class ListNotes extends Component {
constructor() {
        super();
        this.state = { items: [] };
    }

    componentDidMount() {
        fetch('http://localhost/react_lumen/public/blog')
        .then(result=>result.json())
        .then(items=>this.setState({items}))
    }
  render() {
    return (
      <div>
      	<ul>
           {this.state.items.map(item=>

            <div className="card card-accent-primary">
            <div className="card-header">
                {item.id} :: {item.title}
            </div>
            <div className="card-block">
               {item.body}
            </div>
        </div>

            )}
        </ul>

      </div>
    );
  }
  
}

export default ListNotes;
