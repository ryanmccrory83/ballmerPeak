import React, { Component } from 'react';

import '../App.css';

class Page extends Component {
  render() {
    return (
        <div>
          <h2>
            {this.props.drinks}
          </h2>
        </div>
    );
  }
}

export default Page;
