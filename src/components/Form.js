import React, { Component } from 'react'

import '../App.css';


class Form extends Component {

    state = {
        post: {
            name: '',
            weight: '',
            start: '',
            end: '',
            drinks: ''
        }
    }

    handleChange = (event) => {
        const target = event.target
        const value = target.value
        const name = target.name

        this.setState({ 
            ...this.state,
            post: { ...this.state.post,
                [name]: value
            }
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const body = JSON.stringify(this.state.post)

        fetch('https://bac-to-sober-be.herokuapp.com/drinker/1', {
                method: 'PUT',
                headers: {
                    "content-type": "application/json"
                },
                body: body
            })
            .then(res => res.status = 201 ? console.log('submitted') : console.log('not working'))
            event.target.reset()
    }

    onStartClick = (event) => {
        fetch('https://bac-to-sober-be.herokuapp.com/drinker/1', {
                method: 'PUT',
                headers: {
                    "content-type": "application/json"
                },
                body: {start: Date.now()}
            })
            .then(res => res.status = 201 ? console.log('submitted') : console.log('not working'))
        }

    onEndClick = (event) => {
        fetch('https://bac-to-sober-be.herokuapp.com/drinker/1', {
                method: 'PUT',
                headers: {
                    "content-type": "application/json"
                },
                body: {start: Date.now()}
            })
        .then(res => res.status = 201 ? console.log('submitted') : console.log('not working'))
    }

    onDrinkClick = (event) => {
        fetch('https://bac-to-sober-be.herokuapp.com/drinker/1', {
                method: 'PUT',
                headers: {
                    "content-type": "application/json"
                },
                body: {drinks: this.props.drinker.drinks++}
            })
        .then(res => res.status = 201 ? this.setRedirect() : console.log('not working'))
    }

    render() {
        return ( 
            <div className = 'form-container' >
                <form className = 'form' onSubmit = { this.handleSubmit } >
                    <div className = 'form-div' >
                        <label htmlFor = 'name' > Name: </label> 
                        <input type = 'text' name = 'name' onChange = { this.handleChange } /> 
                    </div> 
                    <div className = 'form-div' >
                        <label htmlFor = 'weight' > Weight: </label> 
                        <input type = 'text' name = 'weight' onChange = { this.handleChange } /> 
                    </div> 
                </form> 
                    <button type = 'text' name = 'start' onClick = { this.onStartClick } /> 
                    <button type = 'text' name = 'end' onClick = { this.onEndClick } /> 
                    <button type = 'text' name = 'drinks' onClick = { this.onDrinksClick } /> 
            </div>
        )
    }
}

export default Form;