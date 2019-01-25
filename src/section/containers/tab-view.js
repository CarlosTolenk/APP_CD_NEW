import * as React from 'react';
import { View, StyleSheet, Dimensions, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

//Component
import Planes from '../containers/planes-list';
import Eventos from '../containers/eventos-list';
import Slider from '../containers/promo';
import Anuncio from '../containers/anuncios';
import BannerLo from './banner';


const { height, width } = Dimensions.get('window');

const FirstRoute = () => (

  <ScrollView style={styles.container}>    
      <ScrollView style={styles.anuncios}>
        <Anuncio/>
      </ScrollView>
      <View style={styles.banner} >
         <BannerLo/>
      </View> 
  </ScrollView>

);
const SecondRoute = () => ( 

  <ScrollView style={styles.colorPage}> 
     <Planes/>
  </ScrollView>

);

const ThirdRoute = () => (    
  <ScrollView style={styles.colorPage}> 
     <Eventos/>
  </ScrollView>
  );
  
export default class TabViewExample extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Anuncios' },
      { key: 'second', title: 'Planes' },
      { key: 'third', title: 'Eventos' },
    ],
  };

  render() {
    return (
      <TabView
        
        navigationState={this.state}
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute,
          third: ThirdRoute
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height}}
      />
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,     
        // height: height , 
        // width: Dimensions.get('window').width,        
    },
    containerItem:{
        width: Dimensions.get('window').width,   
    },
    colorPage:{
      backgroundColor:"white"
    },
    anuncios:{
      flex: 2,
      width: width,    
    },
    banner:{
      flex: 1,  
      justifyContent: 'flex-end',
     
    
    }
})



