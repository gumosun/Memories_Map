import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import AddNew from './components/AddNew';
import axios from 'axios'
import MemoryInfo from './components/MemoryInfo'
import GeoLocation from './components/GeoLocation'
import GMap from './components/Map'



class App extends Component {
  constructor (){
  super();  
  this.state = {
  currentPage: 'home',
  apiLoaded: false,
  memories:[],
  detailmemory:[],
  id:null
}
this.setPage = this.setPage.bind(this);
this.handleClick=this.handleClick.bind(this);
this.selectEditedMemory=this.selectEditedMemory.bind(this);
this.resetMemories=this.resetMemories.bind(this);
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

handleClick() {
    console.log(this.state.id)
    console.log('this is click')
        axios.get(`/memories/all/${this.state.id}`, {
            id: this.state.currentMemory
        })
    .then(res => {
    this.setState({
           detailmemory:res.data.data,
           apiLoaded:true,
           currentPage:'single' 
       })
        console.log(this.state.apiLoaded)
        console.log(this.state.detailmemory)
     }).catch(err => console.log(err));
    }

 setPage(page) {
    console.log('click');
    this.setState({
      currentPage: page,
    })
  }

  selectEditedMemory(id) {
    console.log('hi')
    console.log(id)
    this.setState({id: id}, this.handleClick)
  } 

 decideWhichPage() {
    switch(this.state.currentPage) {
      case 'home':
        return <Home 
                memories={this.state.memories}
                apiLoaded={this.state.apiLoaded}
                selectEditedMemory={this.selectEditedMemory}/>
      case 'add':
        return <GeoLocation/>;
        break;   
      case 'single':
        return <MemoryInfo memory={this.state.detailmemory} resetMemories={this.resetMemories} currentPage='single'/>;
        break;   
      default: 
        break;
    }
  }

  resetMemories() {
    axios.get(`/memories/all`, {
     }).then(res => {
         console.log('this is resset')
       this.setState({
           memories:res.data.data,
           currentPage:'home'
            })
     }).catch(err => console.log(err));
   
  }

  render() {
    return (
      <div className="App">
        <Header setPage={this.setPage} />
        <div id='gmaps'><GMap memories={this.state.memories}/></div>
        {this.decideWhichPage()}
        <Footer />
      </div>
    );
  }
}

export default App;
