import React, {Component} from 'react';
import {Row, Col, Jumbotron, Form, Container, Button} from 'react-bootstrap';
import Dropdown, { Select } from 'semantic-ui-react';
import EventForm from './EventForm';

export class Confirmation extends Component{
    back = e => {
        e.preventDefault();
        this.props.previousPage();
    }
    render(){
        const {
            values: {firstName, lastName, email, phoneNumber, age, country}
        } = this.props;

        return(
            <Container className='form-container'>
            <h1 className='text-center'>Thank you for registering!</h1>
            <h2 className='text-center'>Please confirm your information below</h2>
            <dl class="row">
                <dt class="col-sm-3">First Name</dt>
                <dd class="col-sm-9">{firstName}</dd>

                <dt class="col-sm-3">Last Name</dt>
                <dd class="col-sm-9">{lastName}</dd>

                <dt class="col-sm-3">E-mail</dt>
                <dd class="col-sm-9">{email}</dd>

                <dt class="col-sm-3">Phone Number</dt>
                <dd class="col-sm-9">{phoneNumber}</dd>

                <dt class="col-sm-3">Age</dt>
                <dd class="col-sm-9">{age}</dd>
                
                <dt class="col-sm-3">Country</dt>
                <dd class="col-sm-9">{country}</dd>

                
            </dl>
            </Container>
        )
        

    }
   



}
export default Confirmation