import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const Task = (props: any) => {
  return (
	<View style={styles.item}>
		<TouchableOpacity style={styles.square}></ TouchableOpacity>
		<Text style={styles.text}>{props.text}</Text>
	</View>
  );
}

const styles = StyleSheet.create({
  item: {
	flexDirection: 'row',
	backgroundColor: '#D6D6D6',
	alignItems: 'center',
	justifyContent: 'space-between',
	padding: 10,
	borderRadius: 20,
	margin: 5,
	marginLeft: 20,
	marginRight: 20,
  },
  square: {
	width: 24,
	height: 24,
	borderRadius: 5,
	backgroundColor: '#55BCF6',
	opacity: 0.4,
	marginRight: 5,
  },
  text: {
	fontSize: 18,
	flexDirection: 'row',
	flexWrap: 'wrap',
	alignItems: 'center',
  },
});

export default Task;