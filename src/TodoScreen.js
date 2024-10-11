import { Alert, FlatList, StyleSheet, Text, TextInput, TouchableOpacity,View } from "react-native";
import React, { useState } from "react";
import { IconButton } from "react-native-paper";
import Fallback from "./components/Fallback";


const TodoScreen = () => {
    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([]);
    const [editedTodo, setEditedTodo] = useState(null);

    const handleAddTodo = () => {
        if (todo.trim()) {
            setTodoList([...todoList, { id: Date.now().toString(), title: todo }]);
            setTodo("");
        } else {
            Alert.alert("Please enter a task.");
        }
    };

    const handleDeleteTodo = (id) => {
        const updatedTodoList = todoList.filter((item) => item.id !== id);
        setTodoList(updatedTodoList);
    };

    const handleEditTodo = (item) => {
        setEditedTodo(item);
        setTodo(item.title);
    };

    const handleUpdateTodo = () => {
        if (editedTodo) {
            const updatedTodos = todoList.map((item) => {
                if (item.id === editedTodo.id) {
                    return { ...item, title: todo };
                }
                return item;
            });
            setTodoList(updatedTodos);
            setEditedTodo(null);
            setTodo("");
        }
    };

    const renderTodos = ({ item }) => {
        return (
            <View style={{
                backgroundColor: "#7E60BF",
                borderRadius: 6,
                paddingHorizontal: 6,
                paddingVertical: 8,
                marginBottom: 12,
                flexDirection: "row",
                alignItems: "center",
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 3,
                elevation: 2,
            }}>
                <Text style={{ color: "#fff", fontSize: 20, fontWeight: "800", flex: 1 }}>{item.title}</Text>
                <IconButton icon="pencil" iconColor="#fff" onPress={() => handleEditTodo(item)} />
                <IconButton icon="trash-can" iconColor="#fff" onPress={() => handleDeleteTodo(item.id)} />
            </View>
        );
    };

    return (
        <View style={{ marginHorizontal: 16 }}>
            <Text style={styles.heading}>Today's Tasks</Text>
            <TextInput
                style={{
                    borderWidth: 2,
                    borderColor: "#7E60BF",
                    borderRadius: 6,
                    paddingVertical: 8,
                    paddingHorizontal: 16,
                }}
                placeholder="Add a task"
                value={todo}
                onChangeText={(userText) => setTodo(userText)}
            />

            <TouchableOpacity
                style={{
                    backgroundColor: "#091057",
                    borderRadius: 6,
                    paddingVertical: 12,
                    marginVertical: 34,
                    alignItems: "center",
                }}
                onPress={editedTodo ? handleUpdateTodo : handleAddTodo} 
          >
                <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>
                    {editedTodo ? "Save" : "Add"} 
                </Text>
            </TouchableOpacity>

            <FlatList
                data={todoList}
                renderItem={renderTodos}
                keyExtractor={(item) => item.id}
            />
            {todoList.length <= 0 && <Fallback />}
        </View>
    );
};

export default TodoScreen;

const styles = StyleSheet.create({
    
    heading: {
        fontSize: 24, 
        fontFamily: 'monospace', 
        color: 'black', 
        marginBottom: 10, },
});