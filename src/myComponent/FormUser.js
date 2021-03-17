import React, { Component } from 'react';
import {  MuiThemeProvider} from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import UserForm from './UserForm';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';








  

export class FormUser extends Component {
    
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
      
        const{values}=this.props;
        return (
            < MuiThemeProvider >
             
           
                 
                    <TextField
                    hintText="Enter your first name"
                    floatingLabelText="First name"
                    placeholder="name"
                    
                    // onChange={handleChange('firstname')}
                    // defaultValue={values.firstname}
                    />
                    <br></br>
                   
                
                    
                    <Button
                    Text="Continue"
                    
                    onClick={this.continue}/>
                
            </MuiThemeProvider>
            
        )
    }
}

export default FormUser;