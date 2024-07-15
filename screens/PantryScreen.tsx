import React, {useState} from 'react';
import { StyleSheet, Text, View, Modal, Button } from 'react-native';
import AddButtonComponent from '../components/AddButtonComponent';
import PanelComponent from '../components/pantry/PanelComponent';
import PanelZoomComponent from '../components/pantry/PanelZoomComponent';

const PantryScreen = () => {
	const data1 = [
		{ id: '1', text: 'Viandes' },
		{ id: '2', text: 'Légumes' },
		{ id: '3', text: 'Fruits' },		
	];
	const [modalVisible, setModalVisible] = useState(false);
	const [modalText, setModalText] = useState('');

	const handlePress = (text: string) => {
		setModalText(text);
		setModalVisible(true);
	  };

	return (
		<View style={styles.container}>
			<View style={styles.section1}>
				<Text style={styles.title}>Dans mon placard</Text>
			</View>
			<View style={styles.middleSection}>
				<MatrixComponent data={data1} onPress={handlePress}/>
				<Modal transparent={true} visible={modalVisible}>
					<View style={styles.centeredView}>
						<View style={styles.modalView}>
							<Text style={styles.title}>{modalText}</Text>
							<Button
							title="X"
							onPress={() => setModalVisible(!modalVisible)}
							/>
							<PanelZoomComponent />
							
						</View>
					</View>
				</Modal>
			</View>
			<View style={styles.section1}>
				<AddButtonComponent text="ajouter un placard"/>
			</View>
		</View>
  	);
}

const MatrixComponent = (props: any) => {
	return (
	  <View style={styles.app}>
		{props.data.map((data: any) => (
		  <View key={data.id}>
			<PanelComponent text={data.text} onPress={() => props.onPress(data.text)} />
		  </View>
		))}
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
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	modalView: {
		margin: 20,
		backgroundColor: 'white',
		borderRadius: 20,
		padding: 35,
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
		  width: 0,
		  height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
	},
});

export default PantryScreen;