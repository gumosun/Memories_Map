import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import AddNew from './components/AddNew';

class App extends Component {
  constructor (){
  super();  
  this.state = {
  currentPage: 'home',
}
this.setPage = this.setPage.bind(this);
  }

 setPage(page) {
    console.log('click');
    this.setState({
      currentPage: page,
    })
  }

 decideWhichPage() {
    switch(this.state.currentPage) {
      case 'home':
        return <Home/>;
        break;
      case 'add':
        return <AddNew/>;
        break;  
      default:
        break;
    }
  }

  

  render() {
    return (
      <div className="App">
        <Header setPage={this.setPage} />
        {this.decideWhichPage()}
        <Footer />
      </div>
    );
  }
}

export default App;
