import React, { Component } from 'react';
import TextFieldGroup from './common/TextArea.js';
import ListNotes from './ListNotes.js';

class Data_content extends Component {

    constructor(props) {
        super(props);
        this.state = {
            datatextbox: '',
            data: [
                { notes: "Lorem Ipsum" },
                { notes: "Pasti Bisa" }
            ]
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value });
    }

    render() {
        const { datatextbox } = this.state;
        return (

            <div className = "container" >
                <div className = "row" >
                    <div className = "col-md-5" >
                        <div className = "box-name" >
                        <form onSubmit = { this.onSubmit } >
                        <TextFieldGroup field = "datatextbox"
                        label = "Notes"
                        rows = "3"
                        value = { datatextbox }
                        onChange = { this.onChange }
                        /> 
                        <div className = "form-group" >
                            <button className = "btn btn-success btn-md float-right btn-block" > Add Notes < /button> 
                        </div> 
                        <div className = "clearfix" ></div> 
                        </form> 
                        </div> 
                    </div> 
                    <div className = "col-md-7" > 
                        {this.state.data.map((data) => ( <
                            ListNotes data = { data }
                            />
                        ))
                    } 
                    </div> 
                </div> 
            </div>
        );
    }
}
export default Data_content;