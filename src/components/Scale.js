import React, { Component } from 'react';
import ProgressBar from './ProgressBar';


import '../App.css';

class Page extends Component {
  render() {
    return (
        <div>
            <ProgressBar drinks={this.props.drinks} />
        </div>
    );
  }
}

export default Page;
