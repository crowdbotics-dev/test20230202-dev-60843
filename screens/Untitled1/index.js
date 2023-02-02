import { useSelector } from "react-redux";
import { Pressable } from "react-native";
import { View } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1 = ({
  navigation
}) => {
  const universitiesapi_response_get_Search = useSelector(state => state.universitiesapi_response_get_Search);
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><Pressable onPress={() => navigation.navigate("Untitled2", {
        "greeting": "hello",
        "name": universitiesapi_response_get_Search.name
      })}><View style={styles.lmDFSFdp}></View></Pressable></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  lmDFSFdp: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  }
});
export default Untitled1;