import React, { Component } from 'react';
import Scale from './Scale'

import '../App.css';

class Page extends Component {
  render() {
    return (
        <div>
          <h2>
            {this.props.drinker.name}
            {this.props.drinker.weight}
            {this.props.drinker.drinks}
          </h2>
          <Scale drinks={this.props.drinker.drinks} />
        </div>
    );
  }
}

export default Page;
