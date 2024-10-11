import { StyleSheet,Text,SafeAreaView, View } from "react-native";
import TodoScreen from "./src/TodoScreen";



export default function App() {
  return (
    <SafeAreaView style={styles.container}> 
      <View style={styles.innerView}> 
        <TodoScreen />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE1FF', 
  },
  innerView: {
    flex: 1,
    justifyContent: 'center', 
  }
});
