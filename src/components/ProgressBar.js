import React, { Component } from 'react';
import Filler from './Filler'

import '../App.css';

const ProgressBar = (props) => {
    return (
        <div className="progress-bar">
          <Filler percentage={props.percentage} />
        </div>
      )
  }
        
export default ProgressBar;