import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Image } from 'react-native';

export default class App extends React.Component {
  

  makeSwish(){
    console.log("Swish")
  }

  render() {
    return (

      <View style={styles.container}>
         <Image source={require('./img/background-1.png')} style={styles.backgroundImage} />

          <Button
            onPress={this.makeSwish}
            title="OG Swish"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />


      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    position:'absolute',
    resizeMode: 'cover',
    zIndex: -1 // or 'stretch'
  }

});
