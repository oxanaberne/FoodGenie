import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import AddButtonComponent from '../AddButtonComponent';

const Item = (props: any) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{props.quantity}g {props.text}</Text>
      <View style={styles.quantityControls}>
        <TouchableOpacity onPress={props.onDecrease} style={styles.button}>
          <Text>-</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={props.onIncrease} style={styles.button}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const PanelZoomComponent = () => {
  const [items, setItems] = useState([
    { id: '1', text: 'Poitrine de poulet', quantity: 200 },
  ]);

  const handleIncrease = (id: any) => {
    setItems(items.map(item => item.id === id ? { ...item, quantity: item.quantity + 10 } : item));
  };

  const handleDecrease = (id: any) => {
    setItems(items.map(item => item.id === id && item.quantity > 0 ? { ...item, quantity: item.quantity - 10 } : item));
  };

  return (
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
			<ScrollView>
				{items.map(item => (
					<Item
						key={item.id}
						text={item.text}
						quantity={item.quantity}
						onIncrease={() => handleIncrease(item.id)}
						onDecrease={() => handleDecrease(item.id)}
					/>
				))}
			</ScrollView>
        </View>
		<AddButtonComponent text="ajouter un aliment"/>
      </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: '#d3d3d3',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    width: 600,
    height: 500,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  itemText: {
    fontSize: 18,
  },
  quantityControls: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#ccc',
    borderRadius: 5,
    padding: 5,
    marginLeft: 5,
  },
});

export default PanelZoomComponent;