import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Platform,
} from "react-native";


const CreatPostsScreen = () => {
    return (
      <View style={styles.container}>
            <View style={styles.fotoArea}>
                <View style={styles.fotoWrapper}>

                </View>
                <Text style={styles.callToAction}></Text>
        </View>
        <View style={styles.inputArea}>
            <TextInput style={styles.postTitle} />
            <TextInput style={styles.postLocation } />
        </View>
      </View>
    );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  fotoArea: {
    paddingHorizontal: 16,
  },
  fotoWrapper: {
    height: 240,
    width: 343,
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
  },
});


export default CreatPostsScreen;