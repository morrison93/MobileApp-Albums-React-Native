// Import a library to help create a component
import React from 'react';								// Destructuring imports 
import { AppRegistry } from 'react-native';		// Library installed with npm
import Header from './src/components/header';			// Library developed by myself with relative path to it


// Create a component
const App = () => (					// refactored version of the one below
	<Header headerText={'Albums'}/> // Component nesting: nesting the header (in a self closing tag) inside another component (App component)  
);									// passing the header Text to the header so its controlled by the root component - reusable!!! 

/*const App = () => {
	return (
		<Text>Some Text</Text> 
		);
};*/


// Render it to the device 
AppRegistry.registerComponent('albums', () => App); // Only the root component uses AppRegistry