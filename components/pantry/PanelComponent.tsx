import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const PanelComponent = (props: any) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <View style={styles.panel}>
        <View style={styles.leftSection}>
          <Text style={styles.text}>{props.text}</Text>
          <View style={styles.dot} />
        </View>
        <View style={styles.rightSection}>
          <View style={styles.dot} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
  },
  panel: {
    flexDirection: 'row',
    width: 250,
    height: 150,
    backgroundColor: '#d3d3d3',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#000',
    overflow: 'hidden',
    margin: 50,
  },
  leftSection: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRightWidth: 1,
  },
  rightSection: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  text: {
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    backgroundColor: '#000',
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default PanelComponent;