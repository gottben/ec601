// /**
 // * Sample React Native App
 // * https://github.com/facebook/react-native
 // * @flow
 // */

// import React, { Component } from 'react';
// import {
  // AppRegistry,
  // StyleSheet,
  // Text,
  // View
// } from 'react-native';

// class AwesomeProject extends Component {
  // render() {
    // return (
      // <View style={styles.container}>
        // <Text style={styles.welcome}>
          // Welcome to React Native!
        // </Text>
        // <Text style={styles.instructions}>
          // Hello World! My name is Alex Bennett! 
		  // This is my first attempt at developing
		  // an Android application! 
        // </Text>
  
      // </View>
    // );
  // }
// }

// const styles = StyleSheet.create({
  // container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  // },
  // welcome: {
    // fontSize: 20,
    // textAlign: 'center',
    // margin: 10,
  // },
  // instructions: {
    // textAlign: 'center',
    // color: '#333333',
    // marginBottom: 5,
  // },
// });

// AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);



import React, { Component } from 'react';
import ReactNative from 'react-native';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

const StartButton = require('./android/components/StartButton'); 
const UInput = require('./android/components/UInput');
const DisplayLogo = require('./android/components/DisplayLogo');
const styles = require('./styles.js');


// export default class AwesomeProject extends Component { 

	// render() {
		// const routes = [
			// {title: 'Login', index:0},
			// {title: 'Registration', index: 1},
			// {title: 'Forgot Password', index: 2},
			// {title: 'Registration', index: 3},
			// {title: 'Account', index: 4},
			// {title: 'Order History', index: 5},
			// {title: 'Pricing', index: 6},
			// {title: 'FAQ', index: 7},
			// {title: 'Order', index: 8},
			// {title: 'Order Summary', index: 9},
			// {title: 'Choose Payment', index: 10}
				// ];
		// return ( 
			// <Navigator
				// initialRoute={routes[0]}
				// initialRouteStack={routes}
				// renderScene={(route,navigator) => 
				// )
	// }


class AwesomeProject extends Component {
  render() {
    return (
		
		<View style={styles.container}>
			<View style={styles.logoSet}>
				<DisplayLogo />
			</View>
		
			<View style={styles.loginInfo}>
				<UInput title="Username"/>
				<UInput title="Password"/>
		
				<View style={styles.buttons}>
					<StartButton title="Login" onpress={"()" ==""> {}} />

					<StartButton title="Register" onpress={"()" == ""> {}} />
				</View>
			</View>



		</View> 
		
    );
  }
}





			

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
