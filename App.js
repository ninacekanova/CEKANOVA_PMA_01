import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList
} from "react-native";

import Item from "./src/components/Item.js";

export default function App() {
  const [item, setItem] = useState("");
  const [task, setTask] = useState([]);

  function handleAddItem() {
    console.log("item", item);
    setTask([...task, item]);
  }

  function handleInputText(text) {
    setItem(text);
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="zadajte task"
          onChangeText={handleInputText}
        />
        <Button onPress={handleAddItem} title="Pridať task" />
      </View>

      <ScrollView style={styles.udalosti}>
      <FlatList
        data={task}
        renderItem={({item}) => <Text>{item}</Text>}
        keyExtractor={item => item.id}
      />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },

  input: {
    borderWidth: 3,
    borderRadius: 4,
    borderColor: "#49071f",
    width: "80%",
  },

  udalosti: {
    flex: 3,
  },

  inputStyles: {},
  textItem: { padding: 10, backgroundColor: "red", margin: 4 },
});