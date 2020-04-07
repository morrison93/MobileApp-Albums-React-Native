# React-Native Mobile App - Albums 

In this repository you can find the code from "The Complete React Native and Redux Course"
The objective of this course is getting acquainted with the React-Native Platform as well as Redux
by getting an introdutory way of understanding about JSX, Components, Props, State and all the integrating parts of the React-Native Platform. 

## ROADMAP:
	1. Create/ Present a Mockup of the App Outline (presented in ./Mockups & Results)
	2. Creating the Header Component:
		2.1. Consuming File Exports;
		2.2. Styling the Header component with React-Native;
		2.3. Making the Header reusable, while understanding, the root-child hierarchy;
	3. Creating the AlbumList Component:
		3.1. Turning this functional component into a class-based component;
		3.2. Perform fetching of data through HTTP request; 
		3.3. Manage lifecycle methods and component level state;
		3.4. Render Album List to the device;
	4. Added Card Component;
		4.1. Styled the Card component for presenting the album details;
		4.2. Divided the CardSection component for placing diferent pieces of data;
		4.3. Styled the diferent CardSection components;
	5. Make content scrollable;
	6. Create a "Buy Now" Button:
		6.1. Create a Button component;
		6.2. Styled component; 
		6.3. Linked component to outside URL by Linking




### How to run in Android device: 
	1. Make Developer Option - On
	2. Enable USB debugging	
	3. Connect your mobile with usb cable.
	4. Open your sdk platform-tools 
	5. In sdk platform-tools: cmd>adb devices
	6. In sdk platform-tools: cmd>adb reverse tcp:8081 tcp:8081 
	7. in project directory cmd>react-native run-android    	     
