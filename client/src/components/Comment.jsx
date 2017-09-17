import React, {Component} from 'react';
import axios from 'axios';

class Comment extends Component{
    constructor(){
        super()
        this.state = {
            comment: null,
            name:null,
            allcomment:[]
        }
     this.nameUpdate = this.nameUpdate.bind(this);
     this.commentUpdate = this.commentUpdate.bind(this);    
     this.handleCommentSubmit = this.handleCommentSubmit.bind(this); 
    }
// call the api to get all topics in the database
componentDidMount(){
     axios.get(`/memories/all/${this.props.id}/comment`, {
        params: {
            id:this.props.id
        }
     }).then(res => {
         console.log('we are back to react')
         console.log(res.data.data)
       this.setState({
           allcomment:res.data.data
       })
     }).catch(err => console.log(err));
    }

// when a new topic is posting, link to backend to add data in posts table
    handleCommentSubmit() {
      console.log('this is click')  
      axios.post(`/memories/all/${this.props.id}/comment`, {
      id: this.props.id,
      name: this.state.name,
      comment:this.state.comment
    }).then(res => {
        this.renderCurrentTopics()
    }).catch(err => console.log(err));
  }

  // update the input content
    nameUpdate(e) {
    this.setState({
      name: e.target.value
    });
    console.log(this.state.name);
    }

    commentUpdate(e) {
    this.setState({
      comment: e.target.value
    });
    console.log(this.state.comment);
    }
  // render the existing posts of article
    renderCurrentTopics(){
        console.log('this is render')
        console.log(this.state.allcomment)
        return this.state.allcomment.map(comment => {
            return (<div>{comment.name} : {comment.comment}</div>)
        })
    }

    render(){
    return( <div classNmae='forumall'> 
             <div classNmae='postnewtopic'>
            <form  onSubmit={(e) => this.handleCommentSubmit()}>
             <div><input className='commentName'type='text' value={this.state.name} onChange={this.nameUpdate} placeholder='Your name'/></div>
             <div><textarea value={this.state.comment} onChange={this.commentUpdate} placeholder='Leave comment here!'/></div>
             <div className='commentSubmit'> <input type='submit' name='Comment'/></div>
            </form>
            </div>
            <div className='currenttopics'>
            {this.renderCurrentTopics()}
            </div>
          </div>
        )
    }
}

export default Comment;