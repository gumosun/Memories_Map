import React from 'react';
import { Component } from 'react';
import axios from 'axios';
import MemoryList from './MemoryList'
import MemoryInfo from './MemoryInfo'
import GMap from './Map'

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
      <div className='content'>
      <div id='gmaps'><GMap memories={this.props.memories}/></div>    
      <div className="allmemory">
      {this.renderMemories()}
      </div> 
      </div>
  )
  }
}

export default Home;