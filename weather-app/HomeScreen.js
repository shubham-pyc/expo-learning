import { StatusBar } from 'expo-status-bar';
import { FlatList, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';

export default function HomeScreen({navigation}) {
  const [tasks, setLists] = useState(["something"]);
  const [text, setText] = useState("");



  return (
    <View style={styles.container}>
      <View style ={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Task</Text>
        {/* <View style={styles.items}> */}

        
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios"? "padding":"height"}
            style={styles.writeTaskEditor}

          >
            <TextInput style={styles.input} value={text} onChangeText={(text)=> setText(text)} placeholder={'Write your text'}/> 
            <TouchableOpacity onPress={() => navigation.navigate('Details', { city: text })}>
              <View style={styles.addWrapper}>
                <Text style={styles.addText}>+</Text>
              </View>
            </TouchableOpacity>
          </KeyboardAvoidingView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    flexDirection: 'column'
  },
  tasksWrapper:{
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 20
  },
  sectionTitle:{
    fontSize: 20,
    fontWeight: "bold"
  },
  writeTaskEditor:{
    flex: 1,
    marginTop: 20,
    flexDirection: 'row',
    width: '100%',
    justifyContent:'space-between',
    alignItems: 'center',
    // color:"white"
  },
  input:{
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
    fontSize: 20,
    width: 300
  },
  addWrapper:{
    backgroundColor: 'white',
    // padding: 10,
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius: 40,
    padding: 10
  },
  addText:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    
  }
});
