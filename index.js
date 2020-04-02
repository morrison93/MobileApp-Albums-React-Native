// Import a library to help create a component
import React from 'react';								// Destructuring imports 
import { Text, AppRegistry } from 'react-native';


// Create a component
const App = () => (					// refactored version of the one below
	<Text>Some Text</Text>
);

/*const App = () => {
	return (
		<Text>Some Text</Text> 
		);
};*/


// Render it to the device 
AppRegistry.registerComponent('albums', () => App); 