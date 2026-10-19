import {Text, StyleSheet, Pressable}  from "react-native";

export default function Item({title}) {
    return(
        <Pressable>
        <Text style={styles.tasktItem}>
            {title} {title.done}
        </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    tasktItem: {
        backgroundColor: "lightblue",
        margin: 5,
        borderRadius: 8,
        padding: 5,
        fontSize: 16,
    },
});