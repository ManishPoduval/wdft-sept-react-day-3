import React, { Component } from 'react'
import Additem from './components/Additem'
import ShoppingList from './components/ShoppingList'
import {Button, Spinner} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'

class App extends Component {

  state = {
    shoppingList: [],
    filteredList: [],
    showForm: false,
    showPage: false, 
  }

  handleCheck = (someId) => {
    let newItems = this.state.shoppingList.map((item) => {
        if (item.id == someId) {
          item.checked = !item.checked
        }
        return item
    })

    this.setState({
      shoppingList: newItems,
      filteredList: newItems
    })

  }

  handleDelete = (someId) => {
    //delete logic here
    const {shoppingList} = this.state
    let newItems = shoppingList.filter((item) => {
        return item.id !== someId
    })
    this.setState({
      shoppingList: newItems,
      filteredList: newItems
    })
  }

  handleAdd = (event) => {
    event.preventDefault()
    const {shoppingList, filteredList} = this.state
    let name = event.target.shoppingItem.value
    let newItem = {
      id: shoppingList.length + 1 ,
      title: name,
      checked: false,
    }

    this.setState({
      shoppingList: [...shoppingList, newItem],
      // filteredList: [...filteredList, newItem],
      showForm: false
    })

  }

  handleFormShow = () => {
    this.setState({
      showForm: true
    })
  }

  handleSearch = (event) => {
      let searchText = event.target.value 
      const {shoppingList} = this.state

      let filteredList = shoppingList.filter((item) => {
          return item.title.toLowerCase().includes(searchText.toLowerCase())
      })

      this.setState({
        filteredList: filteredList
      })

  }

  componentDidMount() {
    console.log('App componentDidMount called!')
    axios.get('https://jsonplaceholder.typicode.com/todos/')
      .then((response) => {
          // response.data
          this.setState({
            shoppingList: response.data,
            filteredList: response.data,
            showPage: true,
          })
      })
  }

  render() {
    const {filteredList, showForm} = this.state
    let buttonStyle = { 
      height: '40px',
      margin: '10px'
    }
    
    // if it is false do this
    if (!this.state.showPage) {
      return <Spinner animation="border" />
    }


    return (
      <div className="App">
        <h1 style={buttonStyle} >Shopping List</h1>
        {
          showForm ? (
            <Additem onAdd={this.handleAdd} />
          ) : (
            <Button style={buttonStyle} variant="secondary" onClick={this.handleFormShow} >Show</Button>
          )
        }

        <input onChange={this.handleSearch} type="text" placeholder="Search"></input>
        <ShoppingList 
          items={filteredList} 
          onCheck={this.handleCheck} 
          onDelete={this.handleDelete}
        />
      </div>
    )
  }
}


export default App