import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Task(props) {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.squre}></View>
        <Text style={styles.text}>{props.text}</Text>
      </View>
      <View style={styles.circle}>
        <TouchableOpacity onPress={()=> props.remove(props.index)}>
            <View style={styles.button}></View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 20, 
    backgroundColor: "white",
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  } ,
  squre: {
    width: 24,
    height: 24,
    backgroundColor: 'pink',
  },
  text: {
    marginLeft: 20
  },
  circle: {
    // height: 12,
    // width: 12,
    borderRadius: 20,
    borderColor: 'blue',
    borderWidth: 2
  },
  button:{
    height: 12,
    width: 12
  }
});
