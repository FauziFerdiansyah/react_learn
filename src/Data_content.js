import React, { Component } from 'react';
import TextArea from './common/TextArea.js';
import TextFieldGroup from './common/TextFieldGroup.js';
import ListNotes from './ListNotes.js';

class Data_content extends Component {

    constructor(props) {
        super(props);
        this.state = {
            datatitlebox: '',
            datatextbox: '',
            data: [
                { 
                    title: "Lorem Donem",
                    notes: "Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan dan penataan huruf atau typesetting. Lorem Ipsum telah menjadi standar contoh teks sejak tahun 1500an, saat seorang tukang cetak yang tidak dikenal mengambil sebuah kumpulan teks dan mengacaknya untuk menjadi sebuah buku contoh huruf. Ia tidak hanya bertahan selama 5 abad, tapi juga telah beralih ke penataan huruf elektronik, tanpa ada perubahan apapun. Ia mulai dipopulerkan pada tahun 1960 dengan diluncurkannya lembaran-lembaran Letraset yang menggunakan kalimat-kalimat dari Lorem Ipsum, dan seiring munculnya perangkat lunak Desktop Publishing seperti Aldus PageMaker juga memiliki versi Lorem Ipsum." },
                { 
                    title: "My notes",
                    notes: "Pasti Bisa" }
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
        const { datatitlebox } = this.state;
        const { datatextbox } = this.state;
        return (

            <div className = "container" >
                <div className = "row" >
                    <div className = "col-md-5" >
                        <div className = "box-name" >
                        <form onSubmit = { this.onSubmit } >
                        <TextFieldGroup
                        field = "datatitlebox"
                        label = "Title"
                         />
                        <TextArea 
                        field = "datatextbox"
                        label = "Notes"
                        rows = "3"
                        value = { datatextbox }
                        onChange = { this.onChange }
                        /> 
                        <div className = "form-group" >
                            <button className = "btn btn-success btn-md float-right btn-block" > Add Notes 
                                </button> 
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