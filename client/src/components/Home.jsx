import React from 'react';
import { Component } from 'react';
import axios from 'axios';
import MemoryList from './MemoryList'

class Home extends Component {
     constructor(){
        super()
        this.state = {
            memories:[]
        }  
     }
componentDidMount(){
     axios.get(`/memories/all`, {
     }).then(res => {
         console.log('we are back to react')

       this.setState({
           memories:res.data.data
       })
     }).catch(err => console.log(err));
    }

renderMemories(){
        console.log('this is render')
        console.log(this.state.memories)
        return this.state.memories.map(memory => {
            return ( <MemoryList key={memory.id} id={memory.id} title={memory.title} description={memory.description} />)
        })
    }   
     
     
render(){  
  return (
    <div className="home">
        <div className='map'>Map</div>
       <div className="allmemories"> 
      <ul>
       <h1>All Memories</h1>
       {this.renderMemories()}
      </ul> 
       </div>
    </div>
  )
}
}

export default Home;