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
        <div id="background-wrap">
    <div className="bubble x1"></div>
    <div className="bubble x2"></div>
    <div className="bubble x3"></div>
    <div className="bubble x4"></div>
    <div className="bubble x5"></div>
    <div className="bubble x6"></div>
    <div className="bubble x7"></div>
    <div className="bubble x8"></div>
    <div className="bubble x9"></div>
    <div className="bubble x10"></div>
</div>
        <Header />
        <Form drinker={this.state.drinker} />
        <Page drinker={this.state.drinker} />
        <Footer />
      </div>
    );
  }
}

export default App;
