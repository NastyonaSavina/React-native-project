import React from "react";

import { ImageBackground, StyleSheet, Text, View, TextInput, TouchableWithoutFeedback,Keyboard } from 'react-native';

const bgImage = require("../assets/images/Photo_BG.png");


const LoginScreen = () => {
    return (
         <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <ImageBackground sourse={bgImage} style={styles.bgImage} resizeMode="cover" >
                    <View style={styles.formContainer}>

                        <View style={styles.header}>
                            <Text>Log in</Text>
                        </View>
                    </View>

                
            </ImageBackground>
        </View>
         </TouchableWithoutFeedback>
        
        
    )
      
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
   },
    bgImage: {
        flex: 1,
        justifyContent: 'flex-end',
        width: '100%'
    },
    formContainer: {
        backgroundColor: '#7fffd4',
        alignItems:'center',
        width:'100%',
        height: 549,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    header: {
        
    }
});


export default LoginScreen;n