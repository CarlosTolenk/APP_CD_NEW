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
// const advert = firebase.admob().interstitial('ca-app-pub-3940256099942544/1033173712');

const Banner = firebase.admob.Banner;
const AdRequest = firebase.admob.AdRequest;
const request = new AdRequest();
request.addKeyword('foobar');


class BannerLottery extends Component{

    constructor(props){
        super(props);  
        this.state = {
            loading: true,         
        }
    }   

    render(){ 
        return(
            <View style={styles.container}>
                <Banner
                //ca-app-pub-3940256099942544/2934735716 googlge
                unitId={"ca-app-pub-3940256099942544/2934735716"}

                // unitId={"ca-app-pub-1434471372859851/7608010017"}
                size={"SMART_BANNER"}
                request={request.build()}
                onAdFailedToLoad={(err)=> console.log(err)}
                onAdLoaded={() => {
                    console.log('Advert loaded');
                }}
                />          
             </View>
        )
    }

}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'flex-end',
        width: width,      
    },   
    title:{
        backgroundColor: 'blue',
        color: 'white'
    }
});

export default connect(null)(BannerLottery);