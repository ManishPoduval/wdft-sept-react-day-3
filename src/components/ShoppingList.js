import React, { Component } from 'react'
import ShoppingItem from './ShoppingItem'

 class ShoppingList extends Component {

    // this.props.items = []
    // this.props.onCheck = function
    // this.props.onDelete = function



    render() {
        const { items } = this.props
        let listStyle = {
            display: 'flex',
            flexWrap: 'wrap'
        }

        return (
            <div style={listStyle}>
                {
                    items.map((item, i) => {
                        //item =  {id: 1, title: 'Apples', checked: false},
                        return <ShoppingItem 
                        key={i}
                        singleItem={item} 
                        onCheck={this.props.onCheck}
                        onDelete={this.props.onDelete}
                        />
                    })
                }
            </div>
        )
    }
}

export default ShoppingList
