import React, { Component } from 'react'
import {Button,Form} from 'react-bootstrap'

class Additem extends Component {

    // this.props.onAdd = function

    

    render() {
        let formStyle = {
            width: '300px',
            display: 'flex',
            margin: '20px'
        }

        let buttonStyle = { 
            height: '40px',
            marginLeft: '10px'
        }

        return (
            <Form style={formStyle} onSubmit={this.props.onAdd}>
                <Form.Group controlId="formBasicText">
                <Form.Control name="shoppingItem" type="text" placeholder="Enter Item" />
                </Form.Group>
                <Button style={buttonStyle} variant="success" type="submit">Add</Button>
            </Form>
        )
    }
}

export default Additem