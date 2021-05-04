import React, {Component} from 'react';
import {Row, Col, Jumbotron, Form, Container, Button} from 'react-bootstrap';
import Dropdown, { Select } from 'semantic-ui-react';
import SignupForm from './SignupForm';
import Confirmation from './Confirmation';
import {useState} from 'react';


class EventForm extends Component{
    

     constructor(props){
         super(props);
         this.state = {
            page: 1, 
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            age: '',
            country: '',
         }
     }
     
     nextPage = e => {
         const{page} = this.state;
         this.setState({page: page+1})
     }
     previousPage = () => {
        const{page} = this.state;
        this.setState({page: page-1})
    }

    inputChange = input => e => {
        this.setState (
            {
                [input]: e.target.value
            }
        )
    }


   
   
   
    render(){
        const{page} = this.state;
        const{firstName, lastName, email, phoneNumber, age, country} = this.state;
        const values = {firstName, lastName, email, phoneNumber, age, country};

        switch (page){
            case 1:
                return(
                    <SignupForm 
                        nextPage={this.nextPage}
                        inputChange={this.inputChange}
                        values={values}
                    />
                )
            case 2:
                return(
                    <Confirmation 
                        previousPage = {this.previousPage}
                        inputChange = {this.inputChange}
                        values = {values}
                    />
                )

        }
            

        
    }
}
export default EventForm;