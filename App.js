//Core
import React, {Component} from 'react';

//Library or Plugin
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store';
import SplashScreen from 'react-native-splash-screen';
// import Orientation from 'react-native-orientation';

//Components
import Loading from './src/screens/components/loading';
import AppNavigationWithState from './src/app-navigator-with-state'


export default class App extends Component {

    constructor(props) {
      super(props);     
      SplashScreen.hide();
    };

   
   componentWillMount(){

   

   }


  render() {  
    console.disableYellowBox = true;

    return (      
        <Provider
          store={store} 
        >    
          <PersistGate
            loading={<Loading/>}          
    
            persistor={persistor}
          >
            <AppNavigationWithState />          
          </PersistGate>       
        </Provider>     
      );
    }
  }










