// Import libraries for making a component 
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

// Make a class-based component
class AlbumList extends Component {

	state = { albums: [] }; // state level property

	componentWillMount(){	//lifecycle method
		// debugger; way of debugging code, inspect variables etc...
		axios.get('https:rallycoding.herokuapp.com/api/music_albums').then(response => this.setState({ albums: response.data }));
	}


	renderAlbums() {
		return this.state.albums.map(album => 
			<AlbumDetail key={album.title} album = {album} />
		);
	}

	render(){
		console.log(this.state);

		return (
			<ScrollView>
				{this.renderAlbums()}
			</ScrollView>
		);
	}
}

/* 
const AlbumList = () => {
	return (
		<View>
			<Text>AlbumList!!!!</Text>		
		</View>
	);
};*/


// Make the component available to the other parts of the app
export default AlbumList;