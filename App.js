'use strict';

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Image , TouchableHighlight} from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';



export default class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      button_image: 0,
      gestureName: 'none',
      backgroundColor: '#fff'
    };
  }
 
  onSwipe(gestureName, gestureState) {
    const {SWIPE_UP, SWIPE_DOWN} = swipeDirections;
    this.setState({gestureName: gestureName});
    switch (gestureName) {
      case SWIPE_UP:
        if(this.state.button_image < 4){
          this.setState({button_image: this.state.button_image + 1 });
        }

        break;
      case SWIPE_DOWN:
        if(this.state.button_image > 0){
          this.setState({button_image: this.state.button_image - 1 });
        }
        break;
    }
  }

  handleClick(state) {
    console.log(state)
    this.setState(
      {button_image: state.button_count + 1 }    
    );

  }


  _makeSwish(){
    //Need to make Swish Noise
    console.log("Swish")
  }


  render() {
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    };


    return (
      <GestureRecognizer
        onSwipe={(direction, state) => this.onSwipe(direction, state)}
        config={config}
        style={{
          flex: 1,
          backgroundColor: this.state.backgroundColor
        }}
        >

      <View style={styles.container}>

        <Image source={require('./assets/img/background-1.png')} style={styles.backgroundImage} />
        <View style={styles.swishButton}>

        
            <TouchableHighlight onPress={this._makeSwish} underlayColor="rgba(0,0,0,0)">
               <Image 
                  style={styles.button}
                  source={require('./assets/img/button_steel.png')}
                  alt="" /> 
            </TouchableHighlight>

        </View>
        
        <View>
          <TouchableHighlight underlayColor="rgba(0,0,0,0)">

               <Image 
                  style={styles.downArrow}
                  source={require("./assets/img/down.png")}
                  onPress={this.makeSwish}
                  alt="" />
            </TouchableHighlight>
            <Text>{this.state.button_image}</Text>
        </View>


      </View>
      </GestureRecognizer>





    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

  },
  main:{
    backgroundColor: 'rgba(0,0,0,0)',   
    flex: 2,
    position:'absolute',
    zIndex: -1, // or 'stretch'
    justifyContent: 'center'

  },  
  headline:{
    paddingTop:30, 
    paddingLeft:20, 

    fontSize:40
  },
  swishButton:{
    flex: 2,  
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',  
  },
  backgroundImage: {
    backgroundColor: 'rgba(0,0,0,0)',   
    position:'absolute',
    zIndex: -1 // or 'stretch'
  },
  button:{
  
    width: 220, 
    height: 80
  },
  downArrow:{
    width: 40, 
    height: 40

  }

});
