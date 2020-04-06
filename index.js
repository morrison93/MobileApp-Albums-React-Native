// Import a library to help create a component
import React from 'react';								// Destructuring imports 
import { AppRegistry, View } from 'react-native';		// Library installed with npm
import Header from './src/components/header';			// Library developed by myself with relative path to it
import AlbumList from './src/components/AlbumList';

// Create a component
// Refactored version of the one below
// Component nesting: nesting the header (in a self closing tag) inside another component (App component)
// I had to wrap the Header and the AlbumList component under a root view tag. 
const App = () => (					
	<View style={{ flex:1 }}>							
		<Header headerText={'Albums'}/> 
		<AlbumList />
	</View>  
);									// passing the header Text to the header so its controlled by the root component - reusable!!! 


/*const App = () => {
	return (
		<Text>Some Text</Text> 
		);
};*/


// Render it to the device 
AppRegistry.registerComponent('albums', () => App); // Only the root component uses AppRegistry