import * as React from 'react';
import { StyleSheet } from 'react-native';
import { List } from 'react-native-paper';
import Task from './TaskComponent';

const AccordionComponent = (param: any) => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
	<List.Section>    
	  <List.Accordion
		title={param.section}
		style={styles.accordion}
		>

		{param.aliments.map((aliment: any, index: any) => (
			<Task key={index} text={aliment} />
		))}

	  </List.Accordion>
	</List.Section>
  );
}

const styles = StyleSheet.create({
	accordion: {
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
});

export default AccordionComponent;