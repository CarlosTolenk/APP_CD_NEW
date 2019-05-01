import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  Linking,
  StatusBar,
  WebView,
  Platform, Dimensions
} from 'react-native';


const {width, height} = Dimensions.get('window');

class YoutubeChannel extends Component {  
   onNavigation = (url) => {
    Linking.canOpenURL(url)
    .then((supported) => {
      if (!supported) {
        console.log("Can't handle url: " + url);
      } else {
        return Linking.openURL(url);
      }
    })
    .catch((err) => console.error('An error occurred', err));
  }

  render() {
    const { cdiamanteChannel, title, schedule, linkYoutube } = this.props; 

    // if ( cdiamanteChannel ) {
    //     var imageURL = require('../../../assets/logo-tv-fullwhite.png');
    // }else{
    //     var imageURL = require('./my-icon-inactive.png');
    // }
    
    return (
      <View style={styles.container}>
        <View style={styles.containerImage}>

        {
            cdiamanteChannel?
            <Image      
                source={require('../../../assets/logo-tv-fullwhite.png')}    
                style={styles.logo}
            />
            :
            <Image      
                source={require('../../../assets/sabrosa-logo.png')}    
                style={styles.logo}
            />

        }       
      
        </View> 
         
        <View style={styles.sectionAside}>
          <View style={styles.sectionLeft}>
             <Text numberOfLines={1} style={styles.title}>De lunes a viernes</Text>           
             <Text numberOfLines={1} style={styles.content}>{schedule}</Text>
          </View>
          <View style={styles.sectionRight}>
             <Text style={styles.title}>Sintoniza:</Text> 
             <Text numberOfLines={1} style={styles.contentFinal}>{title}</Text>
          </View>      
        </View>

        <View style={styles.actionButton}>
          <Button  
            onPress={() => this.onNavigation(linkYoutube)}                             
            title="Visualizar Canal"
            color="#1565c0"
            accessibilityLabel="Canal"         
          />  
        </View>     

      </View>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 15,
    justifyContent: 'space-around',
    alignContent: 'space-around',
    backgroundColor: '#022c43',
  },
  containerImage:{
    flex: 2,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',  
    // backgroundColor: 'yellow',
    marginTop: "4%",
  },
  sectionAside:{
    flex:1,
    // marginTop: "15%",
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignContent: 'flex-start',
    // alignItems: 'center',
  },
  sectionLeft:{
    marginBottom: 10
  },
  sectionRight:{
    marginBottom: 10
  },
  title: {
    textAlign: 'center',   
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    // marginBottom: 15,
  },
  content:{
    textAlign: 'center',  
    color: 'white',
    fontSize: 16,
    marginBottom: 10
  
  },
  contentFinal:{
    marginBottom: 20,
    textAlign: 'center',  
    color: 'white',
    fontSize: 16,  
  },
  actionButton:{
    flex: 1,
    paddingHorizontal: 20,  
    paddingVertical: 20,  
  },
  logo: {   
    margin: 0,
    padding:0,
    alignItems: 'center',
    justifyContent: 'center',
    width: width*0.80,
    height: height*0.55,
    resizeMode: 'contain'
  }
})

export default YoutubeChannel