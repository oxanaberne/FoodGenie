import React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import AddButton from '../components/AddButtonComponent';
import PanelComponent from '../components/pantry/PanelComponent';

const PantryScreen = () => {
	const data1 = [
		{ id: '1', text: 'Viandes' },
		{ id: '2', text: 'Légumes' },
		{ id: '3', text: 'Fruits' },		
	];
	const data2 = [
		{ id: '4', text: 'Produits Laitiers Produits' },
		{ id: '5', text: 'Cereales' },
		{ id: '6', text: 'Boissons' },
	];

	return (
		<View style={styles.container}>
			<View style={styles.section1}>
				<Text style={styles.title}>Dans mon placard</Text>
			</View>
			<View style={styles.middleSection}>
				<View style={styles.app}>
					{data1.map((data, index) => {
						return <PanelComponent key={index} text={data.text} />;
					})}
				</View>
				<View style={styles.app}>
					{data2.map((data, index) => {
						return <PanelComponent key={index} text={data.text} />;
					})}
				</View>
			</View>
			<View style={styles.section1}>
				<AddButton text="ajouter un placard"/>
			</View>
			
		</View>
  	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		marginHorizontal: 100,
	},
	section1: {
		height: '20%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	middleSection: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
	  fontSize: 35,
	},
	app: {
		width: 1000,
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'flex-start',
	},
});

export default PantryScreen;