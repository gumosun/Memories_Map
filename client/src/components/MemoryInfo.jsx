import React from 'react';
import axios from 'axios';
import EditForm from './EditForm'
import Comment from './Comment'

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
      currentPage : 'home'
  },this.props.resetMemories)
    
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
       return <EditForm id={this.props.memory.id} title={this.props.memory.title} description={this.props.memory.description} resetMemories={this.resetMemories}/>
     }
     else {
       return <div className='all-memory-info'>
            <div className='memory-info'>
            <h1>{this.props.memory.title}</h1>
            <p>{this.props.memory.description}</p> 
            </div>
            <div className='function'>
            <span className="edit" onClick={() => this.editMemory(this.props.memory.id)}>Edit</span>
            <span className="delete" onClick={() => this.deleteMemory(this.props.memory.id)}>Delete</span>
            </div>
            <div className='comment-all'><Comment id={this.props.memory.id}/></div>
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