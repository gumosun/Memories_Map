import React from 'react';
import axios from 'axios';
import MemoryInfo from './MemoryInfo'

class MemoryList extends React.Component {
    constructor(){
        super()
    }
  
render(){   
  return (
      <div className="singlememory">
          <h2 onClick={() => this.props.selectEditedMemory(this.props.id)}>{this.props.title}</h2>
          <p>{this.props.description}</p> 
      </div> 
  )
  }
}




export default MemoryList;