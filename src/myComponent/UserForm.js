import React, { Component } from 'react';

import FormUser from "./FormUser";
import FormPersonal from './FormPersonal';

export class UserForm extends Component {
    state = {
        step: 1,
        firstname:'',
        lastname:'',
        email:'',
        Phone:''
    }
    //proceed to next step
    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step+1
        });

    }
         //proceed to previous step
    prevStep = () => {
        const {step} = this.state;
        this.setState({
            step: step-1
        });
    }
    //Handle fileds change
    handleChange = input => e => {
        this.setState({[input]:e.target.value});
    }
    render() {
        const { step } = this.state;
        const{firstname,lastname,email,Phone} = this.state;
        const values = {firstname,lastname,email,Phone}

        switch(step){
            case 1:
            return (
                <FormUser
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
                />
            );
            case 2:
                return<h1>formDetails
                    <FormPersonal/>
                </h1>
            case 3:
                return<h1>confirm</h1>
            case 4:
                return<h1>sucesss</h1>
        }
       
    }
}

export default UserForm;
