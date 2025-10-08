import React, { Component } from 'react';

class Print8 extends Component {
  render() {
       const isSuccess=true;
    return( <div>
       {isSuccess? <p>Success!</p> :  <p>Failed!</p> }</div>
    );
  }
}

export default Print8;