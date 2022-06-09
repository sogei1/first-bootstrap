import React, { Component } from 'react'

export default class FormTitle extends Component {

    constructor(props){
        super(props)
        this.state = {
            value: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        //console.log(e.target.value)
        //if(this.state.value.length > 7) alert("nome troppo lungo")
        this.setState({value: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault()
        console.log("E' stato inserito: " + this.state.value)
        const postToDo = {
            userId: 111,
            id: undefined,
            title: this.state.value,
            completed: false
        }
        this.props.submit(postToDo)
    }

    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <label>
                Title:
                <input value={this.state.value} onChange={this.handleChange} type="text"></input>
            </label>
            <input type="submit" value="Submit"></input>
            

        </form>
        )
    }
}
