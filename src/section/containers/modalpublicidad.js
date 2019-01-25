import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ActivityIndicator, ScrollView } from 'react-native';

// import { NativeModules } from 'react-native';
// console.log(JSON.stringify(Object.keys(NativeModules)));

//Plugin 
import {connect} from 'react-redux';
import firebase from 'react-native-firebase';

firebase.admob().initialize('ca-app-pub-1434471372859851~3707343740');
//InterModal

//Const
const {width, height} = Dimensions.get('window');

//Controldiamante
// const advert = firebase.admob().interstitial('ca-app-pub-1434471372859851/9419661426');

//Google
const advert = firebase.admob().interstitial('ca-app-pub-3940256099942544/1033173712');

const AdRequest = firebase.admob.AdRequest;
const request = new AdRequest();
request.addKeyword('foobar');


// Load the advert with our AdRequestrr
advert.loadAd(request.build());

advert.on('onAdLoaded', () => {
  console.log('Advert ready to show.');
});

// let resultado = [];

class ModalPublicidadLottery extends Component{

    constructor(props){
        super(props);  
        this.state = {
            loading: true,         
        }
    }  

    componentDidMount(){

        setTimeout(() => {
            if (advert.isLoaded()) {
                 advert.show();
            } else {
          
            }
        }, 1500);
    }

    render(){ 
        return(
            <View></View>
        )
    }

}




export default connect(null)(ModalPublicidadLottery);