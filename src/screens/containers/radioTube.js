import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  StatusBar,
  WebView,
  Platform, Dimensions
} from 'react-native';

//Components
import YoutubeChannel from '../components/youtubeChannel';

//Plugin
import Orientation from 'react-native-orientation';


class RadioTube extends Component { 

  componentDidMount() {
       this.focus =  this.props.navigation.addListener('didFocus', ()=>{
        StatusBar.setBackgroundColor('#022c43');
        StatusBar.setHidden(false);
        StatusBar.setBarStyle('light-content');          
    });
    Orientation.lockToPortrait();    
  }

  componentWillUnmount(){
    this.focus.remove()
  }

  render() {
    return (  
       <YoutubeChannel     
        title="Sabrosa 97 FM"
        schedule="De 12:00 a 1:30 PM"
        linkYoutube="https://www.youtube.com/channel/UCGHCsvA2NR7eHkzoA0ZcaXw"
        cdiamanteChannel={false}        
      />
    )
  }
}

export default RadioTube

