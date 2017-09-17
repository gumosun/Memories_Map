import React from 'react';
import axios from 'axios';
import EditForm from './EditForm'

class MemoryInfo extends React.Component {
  constructor(){
    super()
    this.state = {
      editDirect: false
    }
    this.deleteMemory = this.deleteMemory.bind(this);
    this.editMemory = this.editMemory.bind(this);
  }
  
  deleteMemory(){
    axios.delete(`memories/all/${this.props.memory.id}`, {params: {id: this.props.memory.id}})
  .then(res => {this.setState({
      currentPage : 'single'
  },this.props.resetMemories())
    
     }).catch(err => console.log(err));
    }
  
  editMemory(){
    console.log('click in edit')
          this.setState({
            editDirect:true
          })
       } 
  
  renderPage(){
     if (this.state.editDirect){
       return <EditForm id={this.props.memory.id} title={this.props.memory.title} description={this.props.memory.description}/>
     }
     else {
       return <div>
            <h1>{this.props.memory.title}</h1>
            <p>{this.props.memory.description}</p> 
            <span className="edit" onClick={() => this.editMemory(this.props.memory.id)}>Edit</span>
            <span className="delete" onClick={() => this.deleteMemory(this.props.memory.id)}>Delete</span>
             </div>
       } 
  }     
    

  render(){
  return (
     <div className='showform'>
       {this.renderPage()}
    </div>
  )
  }
}



export default MemoryInfo;