import React, { Component } from 'react';
import Scale from './Scale'

import '../App.css';

class Page extends Component {
  render() {
      let drinker;
      let weight;
      let drinks;
          if (this.props.drinker.length > 0){
              console.log(this.props.drinker[0], 'drinker');
              drinker = <h2>Name: {this.props.drinker[0].name}</h2>
              weight = <h2>Weight: {this.props.drinker[0].weight}</h2>
              drinks = <h2>Drinks: {this.props.drinker[0].drinks}</h2>
              

            }
    return (
        <div>
            {drinker}
            {weight}
            {drinks}
          <Scale drinks={drinks} />
        </div>
    );
  }
}

export default Page;
