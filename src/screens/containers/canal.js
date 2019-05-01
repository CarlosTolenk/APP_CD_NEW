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
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import Orientation from 'react-native-orientation';

const {width, height} = Dimensions.get('window');
// const width = 0;
// const height = 0;

class CanalTv extends Component { 

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

  onNavigation = () => {
    this.props.dispatch(
        NavigationActions.navigate({
            routeName: 'Player'
        })
    )
  }

  render() {
    return (  
       <YoutubeChannel     
        title="Control Diamante TV"
        schedule="De 2:30 a 3:30 PM"
        linkYoutube="https://www.youtube.com/channel/UCuZhMYqg3hnsT-2MXTQGbFw"
        cdiamanteChannel={true}        
      />
    )
  }
}

export default connect(null) (CanalTv)






/*
  <View style={styles.container}>
    <View style={styles.containerImage}>
      <Image
          source={require('../../../assets/logo-tv-fullwhite.png')}
          style={styles.logo}
        />
    </View> 
      
    <View style={styles.sectionAside}>
      <View style={styles.sectionLeft}>
          <Text numberOfLines={1} style={styles.title}>De lunes a viernes</Text>           
          <Text numberOfLines={1} style={styles.content}>De 2:30 a 3:30 PM</Text>
      </View>
      <View style={styles.sectionRight}>
          <Text style={styles.title}>Sintoniza:</Text> 
          <Text numberOfLines={1} style={styles.contentFinal}>Control Diamante TV</Text>
      </View>      
    </View>

    <View style={styles.actionButton}>
      <Button  
        onPress={this.onNavigation}                             
        title="Visualizar Canal"
        color="#1565c0"
        accessibilityLabel="Canal"
        // style={styles.actionButton}
      />  
    </View>     

  </View>

*/