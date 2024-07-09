import React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import Accordion from './Accordion';
import AddButton from '../AddButton';

const GrosseryListScreen = (props: any) => {
	const aliments = ["Poulet", "Boeuf", "Porc", "Agneau", "Canard", "Dinde", "Lapin", "Veau"];

	return (
		<View style={styles.container}>
			<View style={[styles.section, styles.section1]}>
				<AddButton text="ajouter une section a la liste" />
				<AddButton text="ajouter un aliment a la liste" />
				<AddButton text="retirer un aliment de la liste" />
			</View>
			<View style={[styles.section, styles.middleSection]}>
				<Text style={styles.title}>Liste de course</Text>
				<ScrollView style={styles.scrollView}>
					<Accordion section="Viandes" aliments={aliments}/>
					<Accordion section="Viandes" aliments={aliments}/>
					<Accordion section="Viandes" aliments={aliments}/>
					<Accordion section="Viandes" aliments={aliments}/>
					<Accordion section="Viandes" aliments={aliments}/>
					<Accordion section="Viandes" aliments={aliments}/>
					<Accordion section="Viandes" aliments={aliments}/>
				</ScrollView>
			</View>
			<View style={[styles.section, styles.section1]}>
				<AddButton text="ajouter les aliments selectionnees dans le placard" />
			</View>
		</View>
  	);
}

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  flexDirection: 'row',
	},
	section: {
	  justifyContent: 'center',
	  alignItems: 'center',
	},
	section1: {
	  width: '25%',
	},
	middleSection: {
	  flex: 1,
	},
	title: {
	  fontSize: 35,
	  fontWeight: 'bold',
	  position: 'absolute',
	  top: 20,
	  padding: 10,
	},
	scrollView: {
	  marginTop: 100,
	  marginBottom: 10,
	},
});

export default GrosseryListScreen;