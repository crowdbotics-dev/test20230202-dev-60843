import { CheckBox } from "react-native-elements";
import { TextInput } from "react-native";
import { Switch } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled3 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><Switch style={styles.FDeHOoCK} thumbColor="#dd7171" disabled={true}></Switch><TextInput style={styles.rBVXekEh}></TextInput><CheckBox style={styles.tcGTqjzc} title="Checkbox Title"></CheckBox></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  FDeHOoCK: {
    width: 50,
    height: 25
  },
  rBVXekEh: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
  },
  tcGTqjzc: {
    width: 183,
    height: 69
  }
});
export default Untitled3;