import React, {useState} from "react";

import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView
} from "react-native";

const bgImage = require("../assets/images/Photo_BG.png");

const initialState = {
  email: "",
  password: "",
};


const LoginScreen = () => {

  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const [hidePass, setHidePass] = useState(true);
  const [showPassWord, setShowPassWord] = useState('Показати');
  const [isFocused, setIsFocused] = useState({
    email: false,
    password: false,
  });

  const handleInputFocus = (textinput) => {
    setIsFocused({
    [textinput]: true,
    });
  };
  const handleInputBlur = (textinput) => {
    setIsFocused({
      [textinput]: false,
    });
  };

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
    setShowPassWord("Показати");
    setHidePass(true);
  };

  
  const toShowPass = () => {
    setHidePass((prevState) => !prevState);
    setShowPassWord((prevState) =>
      prevState === "Показати" ? "Приховати" : "Показати"
    );

  }


    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <ImageBackground
            sourse={bgImage}
            style={styles.bgImage}
            resizeMode="cover"
          >
            <KeyboardAvoidingView
            // behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
              <View
                style={{
                  ...styles.formContainer,
                  paddingBottom: isShowKeyboard ? 0 : 45,
                }}
              >
                <View style={styles.header}>
                  <Text style={styles.headerTitle}>Увійти</Text>
                </View>
                <TextInput
                  style={{
                    ...styles.input,
                    borderColor: isFocused.email ? "#FF6C00" : "#E8E8E8",
                  }}
                  placeholder="Адреса електронної пошти"
                  textAlign={"left"}
                  onFocus={() => handleInputFocus("email")}
                  onBlur={() => handleInputBlur("email")}
                  value={state.email}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, email: value }))
                  }
                />
                <TextInput
                  style={{
                    ...styles.input,
                    borderColor: isFocused.password ? "#FF6C00" : "#E8E8E8",
                  }}
                  placeholder="Пароль"
                  secureTextEntry={hidePass}
                  textAlign={"left"}
                  onFocus={() => handleInputFocus("password")}
                  onBlur={() => handleInputBlur("password")}
                  value={state.password}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, password: value }))
                  }
                />
                <TouchableOpacity
                  style={styles.showPassword}
                  activeOpacity={0.5}
                  onPress={() => toShowPass()}
                >
                  <Text style={styles.showPasswordText}>{showPassWord}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.btn}
                  onPress={keyboardHide}
                >
                  <Text style={styles.btnTitle}>Увійти</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.registerLink}
                  activeOpacity={0.5}
                >
                  <Text style={styles.registerLinkText}>
                    Ще не має аккаунту? Зарееструватися
                  </Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    );
      
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6495ed",
   
  },
  bgImage: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
  },
  formContainer: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    width: "100%",
    height: 489,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  header: {
    marginTop: 32,
  },
  headerTitle: {
    fontWeight: '500',
    fontSize: 30,
    lineHeight: 35,
    color: "#212121",
  },
  input: {
    marginTop: 33,
    // marginHorizontal: 16,
    padding: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#E8E8E8',
    
    backgroundColor: "#F6F6F6",
    fontStyle: "normal",
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
    width: 343,
    
  
  },

  showPassword: {
    top: -35,
    left: 125,
  },
  showPasswordText: {
    color: "#1B4371",
    fontStyle: "normal",
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
  },
  btn: {
    width: 343,
    height: 51,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 43,
  },
  btnTitle: {
    color: "#FFFFFF",
    fontStyle: "normal",
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
  },
  registerLink: {
    marginTop: 16,
  },
  registerLinkText: {
    color: "#1B4371",
    fontStyle: "normal",
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
  },
});


export default LoginScreen;