

import { StatusBar } from 'expo-status-bar';
import { Button } from 'react-bootstrap';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native/types_generated/index';

export default function App() {
  const [item, setItem] = useState("");
  const [task,setTask] = useState([]);

  function handleAddItem() {
    console.log("item",item);
    setTask([...task, item]);

  }

  function handleInputText(text) {
    setItem(text);
  }
  return (
    <View style={inputStyles.container}>
      <View>
        <TextInput style={styles.input} placeholder="zadajte task" onChangeText={handleInputText} />
        <Button onPress={handleAddItem} title="Pridať task" />
      </View>

      <View style={styles.udalosti}>
    
        {task.map((i) => {
        (<Text>{i}</Text>)})}
      </View>
    </View>
  );
}

const inputStyles  = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 4,
    margin: 2,
    borderWidth: 4,


  },

inputContainer: {
   backgroundColor: '#48566f',
   justifyContent: 'center',
   alignItems: 'center',
   flexDirection: 'row',
},

  input: {
    borderWidth: 3,
    borderRadius: 4,
    borderColor: '#49071f',
    padding: 10,
    marginBottom: 20,
    justifyContent: 'center',
  },

  udalosti: {
    backgroundColor: '#c453ad',
    flex: 1,
  },
});
