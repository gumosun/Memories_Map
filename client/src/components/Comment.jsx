import React, {Component} from 'react';
import axios from 'axios';

class Comment extends Component{
    constructor(){
        super()
        this.state = {
            comment: null,
            name:null,
            allcomment:[],
            newOneId:null,
            newOneName:'',
            newOneComment:'',
            newOneMemory_id:null,
            input:'Leave your comment here',
            yourName:'Your Name'
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
    handleCommentSubmit(e) {
      e.preventDefault()
      console.log('this is click')  
      axios.post(`/memories/all/${this.props.id}/comment`, {
      name: this.state.name,
      comment:this.state.comment
    }).then(res => {
     this.setState({
         newOneId:res.data.data.id,
         newOneName:res.data.data.name,
         newOneComment:res.data.data.comment,
         newOneMemory_id:res.data.data.memory_id,
         input:'Leave your comment here',
         yourName:'Your Name'
     },this.resetData) 
    }).catch(err => console.log(err));
  }
    
    resetData(){
    console.log(this.state.newOneId + this.state.newOneName)
    this.state.allcomment.push({id:this.state.newOneId, name:this.state.newOneName, comment:this.state.newOneComment, memory_id:this.state.newOneMemory_id}) 
    this.forceUpdate()
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
            <form  onSubmit={(e) => this.handleCommentSubmit(e)}>
             <div><input className='commentName'type='text' value={this.state.name} onChange={this.nameUpdate} placeholder={this.state.yourName}/></div>
             <div><textarea value={this.state.comment} onChange={this.commentUpdate} placeholder={this.state.input}/></div>
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