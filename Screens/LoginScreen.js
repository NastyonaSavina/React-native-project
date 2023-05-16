import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";

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
} from "react-native";

const bgImage = require("../assets/images/bg-img.jpg");

const initialState = {
    
    email: "",
    password: "",
};

const RegistrationScreen = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const [hidePass, setHidePass] = useState(true);
  const [showPassWord, setShowPassWord] = useState("Показати");
    const [isFocused, setIsFocused] = useState({
      
      email: false,
      password: false,
    });
  
const navigation = useNavigation();


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

  const Submit = () => {
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
    };
    
    const onPressHandled = () => {
        
        setIsShowKeyboard(false);
        Keyboard.dismiss();
    }

  return (
    <TouchableWithoutFeedback onPress={onPressHandled}>
      <View style={styles.container}>
        <ImageBackground
          source={bgImage}
          style={styles.bgImage}
          resizeMode="cover"
        >
          <View
            style={{
              ...styles.formContainer,
              height: isShowKeyboard
                ? Platform.OS !== "android"
                  ? 477
                  : 248
                : 489,
            }}
          >
            <View style={styles.header}>
              <Text style={styles.headerTitle}>Увійти</Text>
            </View>
            <View style={styles.inputArea}>
              <TextInput
                style={{
                  ...styles.input,
                  borderColor: isFocused.email ? "#FF6C00" : "#E8E8E8",
                  marginBottom: 16,
                }}
                placeholder="Адреса електронної пошти"
                textAlign={"left"}
                onFocus={() => {
                  handleInputFocus("email");
                  setIsShowKeyboard(true);
                }}
                onBlur={() => {
                  handleInputBlur("email");
                  setIsShowKeyboard(false);
                }}
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
                onFocus={() => {
                  handleInputFocus("password");
                  setIsShowKeyboard(true);
                }}
                onBlur={() => {
                  handleInputBlur("password");
                  setIsShowKeyboard(false);
                }}
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
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.btn}
              onPress={Submit}
            >
              <Text style={styles.btnTitle}>Увійти</Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => navigation.navigate("Registration")}
            >
              <Text style={styles.registerLinkText}>
                Ще немає акаунту? Зареєструватись
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6495ed",
  },
  bgImage: {
    flex: 1,
    justifyContent: "flex-end",
  },

  formContainer: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    width: "100%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  header: {
    marginTop: 32,
    marginBottom: 33,
  },
  headerTitle: {
    fontFamily: "Nunito-500",
    fontWeight: "500",
    fontSize: 30,
    lineHeight: 1.17,
    color: "#212121",
  },
  inputArea: {
    marginBottom: 27,
    flexDirection: "column",
  },
  input: {
    padding: 16,
    borderWidth: 1,
    borderRadius: 8,

    backgroundColor: "#F6F6F6",
    fontFamily: "Nunito-400",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 1.19,
    color: "#212121",
    width: 343,
    height: 50,
  },

  showPassword: {
    top: -35,
    left: 250,
  },
  showPasswordText: {
    color: "#1B4371",
    fontFamily: "Nunito-400",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 1.19,
  },
  btn: {
    width: 343,
    height: 51,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },

  btnTitle: {
    color: "#FFFFFF",
    fontFamily: "Nunito-400",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 1.19,
  },

  registerLinkText: {
    color: "#1B4371",
    fontFamily: "Nunito-400",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 1.19,
  },
});

export default RegistrationScreen;
