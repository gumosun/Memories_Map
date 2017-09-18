import React from 'react';
import axios from 'axios';

class EditForm extends React.Component {
    constructor(){
        super()
        this.state = {
            newTitle: "",
            newDescription: ""
        }
     this.titleUpdate = this.titleUpdate.bind(this);  
     this.editSubmit = this.editSubmit.bind(this); 
     this.descriptionUpdate = this.descriptionUpdate.bind(this); 
    }
  
    editSubmit() {
      axios.put(`/memories/all/${this.props.id}`, {
      title: this.state.newTitle,
      description: this.state.newDescription,
    }).then(res => {
      this.setState({
      currentPage: '',
    }, this.props.resetMemories)
    }).catch(err => console.log(err));
  }
  
  
    titleUpdate(e) {
    this.setState({
      newTitle: e.target.value
    });
    console.log(this.state.newTitle);
    }

    descriptionUpdate(e) {
    this.setState({
      newDescription: e.target.value
    });
    console.log(this.state.newDescription);
    }  
    
  render(){
  return (
            <div>
            <div className='addtitle'>Edit Memory</div>
            <form onSubmit={(e) => this.editSubmit()}>
                <input type='text' className='input-group' value={this.state.newTitle} onChange={this.titleUpdate} placeholder={this.props.title}/>
                <input className='input-group' value={this.state.newDescription} onChange={this.descriptionUpdate} placeholder={this.props.description}/>
                <input type='submit' className='input-group' value='Edit!'/>
            </form>
            </div>
  )
  }
}

export default EditForm;