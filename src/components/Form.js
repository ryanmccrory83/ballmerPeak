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
        },
        toggle: false
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
        // const body = JSON.stringify(this.state.post)

        // fetch('https://bac-to-sober-be.herokuapp.com/drinker/1', {
        //         method: 'PUT',
        //         headers: {
        //             "content-type": "application/json"
        //         },
        //         body: body
        //     })
          this.setState({toggle:!this.state.toggle})
          
        //     .then(res => res.status = 201 ? console.log('submitted') : console.log('not working'))
        //     event.target.reset()
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
                <form className = {this.state.toggle ? "form hidden" : "form"} onSubmit = { this.handleSubmit } >
                    <div className = 'form-div' >
                        <label htmlFor = 'name' > Name: </label> 
                        <input type = 'text' name = 'name' onChange = { this.handleChange } /> 
                    </div> 
                    <div className = 'form-div' >
                        <label htmlFor = 'weight' > Weight: </label> 
                        <input type = 'text' name = 'weight' onChange = { this.handleChange } /> 
                    </div> 
                    <div className = 'form-div' >
                        <input type = 'submit' /> 
                    </div> 
                </form> 

                <div className="button-div">
                    <button className= {this.state.toggle ? "buttons hidden" : "buttons"} type = 'text' name = 'start'  onClick = { this.onStartClick }>Start</button> 
                    <button className="buttons" type = 'text' name = 'end' onClick = { this.onEndClick }>End</button>  
                    <button className="buttons" type = 'text' name = 'drinks' onClick = { this.onDrinksClick }>Add a Drink!</button>  
                </div>
            </div>
        )
    }
}

export default Form;