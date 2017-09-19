import React from 'react';
import ReactDOM from 'react-dom';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import axios from 'axios'

// const coords = {
//   lat: 51.5258541,
//   lng: -0.08040660000006028
// };

const params = {v: '3.exp', key:'AIzaSyACXNdBHY2QU0ZTvGnHnNphAFZwM8GbZUE'};

class GMap extends React.Component {
  constructor(){
      super()
      this.state = {
          lat:null,
          lng:null,
          clickinfo:{}
      }
  }  
  
  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  }


//   onClick(id) {
//      axios.get(`memories/all/${id}`)
//   .then(res => {this.setState({
//      clickinfo:res.data.data
//   })
//      }).catch(err => console.log(err));
//   }

// renderInfoAgain(){
//   console.log(this.state.clickinfo.latitude)
//   return
//   (<InfoWindow lat={this.state.clickinfo.latitude} lng={this.state.clickinfo.longitude} content={this.state.clickinfo.title}/>)
// }

renderMaker(){
      return this.props.memories.map(memory=>{
          return (<Marker lat={memory.latitude} lng={memory.longitude} />)
      })
  }
 
 renderInfo(){
      return this.props.memories.map(memory=>{
          return (<InfoWindow lat={memory.latitude} lng={memory.longitude} content={memory.title}/>)
      })
  } 

  render() {
    return (
      <Gmaps
        width={'100%'}
        height={'100%'}
        lat={40.73}
        lng={ -73.989}
        zoom={13}
        loadingMessage={'Loading Map.....'}
        params={params}
        onMapCreated={this.onMapCreated}>
      {this.renderMaker()}
      {this.renderInfo()}
      </Gmaps>
    );
  }

};

export default GMap;