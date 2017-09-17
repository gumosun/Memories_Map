import React from 'react';
import { Component } from 'react';
import axios from 'axios';
import MemoryList from './MemoryList'
import MemoryInfo from './MemoryInfo'

class Home extends Component {
     constructor(){
        super()
     }

renderMemories(){
        return this.props.memories.map(memory => {
            return ( <MemoryList selectEditedMemory={this.props.selectEditedMemory} key={memory.id} id={memory.id} title={memory.title} description={memory.description}/>)
        })
    }   
         
render(){   
  return (
      <div className="singlememory">
      {this.renderMemories()}
      </div> 
  )
  }
}

export default Home;