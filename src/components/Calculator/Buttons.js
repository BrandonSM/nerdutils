import React, { Text, View } from 'react';


class Buttons extends React.Component{
 render() {
    return(
      <View style={styles.buttonContainer}>
      	<Text></Text>
      </View>
    )
 };
   
    
};

const Button = () => (
	<div style={styles.button}>
	 BUTTON
	</div>
);

const styles = {
	button: {
		flex: 1,
		width: 100,
		height: 10,
		borderWidth: '2px',
		borderColor: 'black',
		backgroundColor: 'black',
		color: 'white',
	},
	buttonContainer: {
		flex: 1,
		maxWidth: 400,
	},
	buttonRow: {
		flex:4,
		flexDirection: 'row',
		marginTop:20,
		marginBottom: 20,
	},
};

export default Buttons;