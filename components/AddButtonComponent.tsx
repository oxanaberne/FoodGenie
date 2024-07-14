import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const AddButtonComponent = (props: any) => {
  return (
	<View style={styles.button}>
	  <Button title={ " + " + props.text} onPress={() => console.log('Pressed')} />
	</View>
  );
}

const styles = StyleSheet.create({
  button: {
	flexDirection: 'row',
	backgroundColor: '#D6D6D6',
	alignItems: 'center',
	justifyContent: 'space-between',
	padding: 10,
	borderRadius: 20,
	margin:	5,
  },
});

export default AddButtonComponent;