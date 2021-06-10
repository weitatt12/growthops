import React from 'react'

class Form extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name:"",
            occupation:"",
            email:"",
            contact:"",
            msg:""
        }
        
    }

    getValue = e => {
        e.preventDefault();
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        let data = this.state
        console.log(data)
    }

    render() {
        return (
            <div className="register">
                <p className="title">Register Your Interest</p>
                <form onSubmit={this.handleSubmit} className="col-12 form-interest">
                    <div className="row">
                        <div className="col col-12 col-md-6 col-lg-6">
                            <input type="text" className="form-control input-field" placeholder="Name" name="name"  onChange={this.getValue} />
                        </div>
                        <div className="col col-12 col-md-6 col-lg-6">
                        <input type="text" className="form-control input-field" placeholder="Occupation" name="occupation" onChange={this.getValue} />
                        </div>
                        <div className="col col-12 col-md-6 col-lg-6">
                        <input type="text" className="form-control input-field" placeholder="Email Address" name="email" onChange={this.getValue} />
                        </div>
                        <div className="col col-12 col-md-6 col-lg-6">
                        <input type="text" className="form-control input-field" placeholder="Contact No" name="contact" onChange={this.getValue} />
                        </div>
                        <div className="form-group col col-12 col-md-6 col-lg-6">
                        <textarea type="text" className="form-control input-field" placeholder="Message ..." name="msg" onChange={this.getValue} />
                        </div>
                        <div className="form-group col col-12 col-md-6 col-lg-6">
                        <input type="hidden" className="form-control" placeholder="Message ..." />
                        </div>
                        <div className="form-group col col-12 col-md-6 col-lg-6">
                        <button className="button-register">SUBMIT MESSAGE</button>
                        </div>
                    </div>
                </form>
            </div>
    
        );
    }
}

export default Form;