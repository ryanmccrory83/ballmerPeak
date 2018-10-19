import React, { Component } from 'react';
import Header from './components/Header'
import Form from './components/Form'
import Page from './components/Page'
import Footer from './components/Footer'

import './App.css';

class App extends Component {

  state = {
    drinker: []
  }
  
  componentDidMount() {
    this.getTheStuff()
  }
  
  getTheStuff = () => {
    fetch('https://bac-to-sober-be.herokuapp.com/drinker')
      .then(res => res.json())
      .then(myData => {
        this.setState({drinker: myData.drinker})
      })
}

  render() {
    return (
      <div>
        <Header />
        <Form drinker={this.state.drinker} />
        <Page drinker={this.state.drinker} />
        <Footer />
      </div>
    );
  }
}

export default App;
