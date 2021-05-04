import React, {Component} from 'react';
import {Col, Form, Container, Button} from 'react-bootstrap';
import EventForm from './EventForm';
import AgeSelect from './AgeSelect';
import {useState} from 'react';


export class SignupForm extends Component{
    
    validateForm() {
        if (this.firstName == '' ||this.lastName == '' ||this.email == '' ||this.phoneNumber == '' ||this.age == '' ||this.country== '' ){
            alert('This field must be filled out');
            return false;
        } 
    }

    continue = e => {
        this.validateForm();
        e.preventDefault();
        this.props.nextPage();
        
    };



    render(){
        const{values, inputChange} = this.props;

        return(
        //Form fields
            <Container  className='form-container'>
            <Form noValidate>
            <Form.Group>
                <h1 className='text-center'>Attendee Information</h1>
                <Form.Label>Name</Form.Label>
                <Form.Row>
                <Col>
                    <Form.Control placeholder='First Name' id='validationDefault01' onChange={inputChange('firstName')} value={values.firstName} required/>
                </Col>
                <Col>
                    <Form.Control placeholder='Last Name' onChange={inputChange('lastName')} value={values.lastName} required/>
                </Col>
                </Form.Row>
            </Form.Group>

            <Form.Row>
            <Form.Group as={Col} controlId='formGridEmail'>
                <Form.Label>E-mail</Form.Label>
                <Form.Control type='email' placeholder='Enter e-mail' onChange={inputChange('email')} value={values.email} />
            </Form.Group>

            <Form.Group as={Col} controlId='formGridTel'>
                <Form.Label>Telephone Number</Form.Label>
                <Form.Control type='tel' placeholder='Enter phone number' onChange={inputChange('phoneNumber')} value={values.phoneNumber} />
            </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Label>Age</Form.Label>
                    <Form.Control type = 'number' onChange={inputChange('age')}  />
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.Label>Country</Form.Label>
                    <Form.Control type='text' placeholder='Enter country of residence' onChange={inputChange('country')} value={values.country}/>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                
            </Form.Row>
            <Button className='btn-lg btn-block btn-info' onClick={this.continue}>Register</Button>


            </Form>
            </Container>
        )
    }
}
export default SignupForm