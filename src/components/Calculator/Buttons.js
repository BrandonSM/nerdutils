import React, { Text } from 'react';


class Buttons extends React.Component{
 render() {
    return(
         <div style={styles.buttonContainer}>
         	<ButtonRow>
						<Button>1</Button>
        		<Button>2</Button>
        		<Button>3</Button>
        		<Button>4</Button>
         	</ButtonRow>
         	<ButtonRow>
	        	<Button>5</Button>
	        	<Button>6</Button>
	        	<Button>7</Button>
	        	<Button>8</Button>
	        </ButtonRow>
	        <ButtonRow>
		       	<Button>9</Button>
	          <Button>0</Button>
	          <Button>+</Button>
	          <Button>-</Button>
	        </ButtonRow>
	        <ButtonRow>
	         	<Button>CLEAR</Button>
	          <Button>BLANK</Button>
	          <Button>BLANK</Button>
	          <Button>BLANK</Button>
	        </ButtonRow>
	      </div>
    )
 };
   
    
};

const Button = () => (
	<div style={styles.button}>
	</div>
);

const ButtonRow = () => (
	<div style={styles.buttonRow}>
	</div>
);

const styles = {
	button: {
		flex: 1,
		flexDirection: 'horizontal',
		width: 100,
		height: 100,
		borderWidth: '2px',
		borderColor: 'black',
		color: 'black',
	},
	buttonRow: {
		flex: 4,
		height:120,
		backgroundColor: 'blue',
		marginTop:20,
		marginBottom: 20,
	},
};

export default Buttons;