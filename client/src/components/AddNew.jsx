import React, {Component} from 'react';
import axios from 'axios';


class AddNew extends Component{
    constructor(){
        super()
        this.state = {
            title:null,
            description:null
        }
     this.titleUpdate = this.titleUpdate.bind(this);  
     this.addNewSubmit = this.addNewSubmit.bind(this); 
    this.descriptionUpdate = this.descriptionUpdate.bind(this); 
    }

// when a new memory is adding, link to backend to add data in memories table
    addNewSubmit() {
      axios.post('/memories/add', {
      title: this.state.title,
      description: this.state.description
    }).then(res => {
      this.setState({
      currentPage: 'home',
    })
    }).catch(err => console.log(err));
  }

  // update the input content
    titleUpdate(e) {
    this.setState({
      title: e.target.value
    });
    console.log(this.state.title);
    }

    descriptionUpdate(e) {
    this.setState({
      description: e.target.value
    });
    console.log(this.state.description);
    }

    render(){
    return( 
            <div>
            <div className='styleform'>
            <div className='addtitle'>Add New Memory</div>
            <form onSubmit={(e) => this.addNewSubmit()}>
                <input type='text' className='input-group' value={this.state.title} onChange={this.contentUpdate} placeholder='title'/>
                <input className='input-group' value={this.state.description} onChange={this.contentUpdate} placeholder='description'/>
                <input type='submit' className='input-group' value='Add New'/>
            </form>
            </div>
            </div>
        )
    }
}

export default AddNew;