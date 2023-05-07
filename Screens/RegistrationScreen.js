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
  Image,
} from "react-native";

const bgImage = require("../assets/images/bg-img.jpg");
const addAvatarIcon= require("../assets/images/add.png")

const initialState = {
    name: "",
    email: "",
    password: "",
};

const RegistrationScreen = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const [hidePass, setHidePass] = useState(true);
  const [showPassWord, setShowPassWord] = useState("Показати");
    const [isFocused, setIsFocused] = useState({
      login: false,
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
                  ? 645
                  : 374
                : 549,
            }}
          >
            <View style={styles.userImage}>
              <TouchableOpacity style={styles.addAvatarIcon}>
                <Image source={addAvatarIcon} />
              </TouchableOpacity>
            </View>
            <View style={styles.header}>
              <Text style={styles.headerTitle}>Реєстрація</Text>
            </View>
            <View style={styles.inputArea}>
              <TextInput
                style={{
                  ...styles.input,
                  borderColor: isFocused.login ? "#FF6C00" : "#E8E8E8",
                  marginBottom: 16,
                }}
                selectionColor="#212121"
                placeholder="Логін"
                textAlign={"left"}
                onFocus={() => {
                  handleInputFocus("login");
                  setIsShowKeyboard(true);
                }}
                onBlur={() => handleInputBlur("login")}
                value={state.login}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, login: value }))
                }
              />
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
                onFocus={() => {
                  handleInputFocus("password");
                  setIsShowKeyboard(true);
                }}
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
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.btn}
              onPress={Submit}
            >
              <Text style={styles.btnTitle}>Зареєструватися</Text>
            </TouchableOpacity>

            <TouchableOpacity  activeOpacity={0.5}>
              <Text style={styles.registerLinkText}>Вже є акаунт? Увійти</Text>
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
    justifyContent: "flex-end"
  },
  userImage: {
    position: "absolute",
    top: -60,
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  addAvatarIcon: {
    position: "absolute",
    right: -12.5,
    bottom: 14,
  },
  formContainer: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    width: "100%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  header: {
    marginTop: 92,
    marginBottom: 33,
  },
  headerTitle: {
    fontWeight: "500",
    fontSize: 30,
    lineHeight: 35,
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
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    width: 343,
    height:50
  },

  showPassword: {
    top: -35,
    left: 250,
  },
  showPasswordText: {
    color: "#1B4371",
    fontStyle: "normal",
    fontWeight: "400",
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
    marginBottom: 16,
  },

  btnTitle: {
    color: "#FFFFFF",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
  },

  registerLinkText: {
    color: "#1B4371",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
  },
});

export default RegistrationScreen;
