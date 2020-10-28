import React, { Component } from 'react'
import {Button, Card} from 'react-bootstrap'

class ShoppingItem extends Component {

    //this.props.singleItem = {id: 1, title: 'Apples', checked: false},
    // this.props.onCheck = function
    // this.props.onDelete = function

    componentWillUnmount(){
        console.log('Component Unmounted for', this.props.singleItem.title)
    }

    render() {

        const {singleItem} = this.props

        let myStyle = {
            textDecoration: singleItem.checked ? 'line-through' : 'none'
        }

        let buttonStyle = { marginRight: '10px' }

        let cardStyle = { width: '18rem', margin: '10px' }

        return (
            <div>
                <Card style={cardStyle}>
                    <Card.Body>
                        <Card.Title style={myStyle}>{singleItem.title}</Card.Title>
                        <Button style={buttonStyle} variant="primary" onClick={() => { this.props.onCheck(singleItem.id)  } } >Check</Button>
                        <Button variant="primary" onClick={() => { this.props.onDelete(singleItem.id)  } } >Delete</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default ShoppingItem