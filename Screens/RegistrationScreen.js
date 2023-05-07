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
  KeyboardAvoidingView,
  Image,
} from "react-native";

const bgImage = require("../assets/images/Photo_BG.png");
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
    };
    
    const onPressHandled = () => {
        
        setIsShowKeyboard(false);
        Keyboard.dismiss();
    }

  return (
    <TouchableWithoutFeedback onPress={onPressHandled}>
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
                height: isShowKeyboard ? 606 : 549,
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
                  }}
                  placeholder="Логін"
                  textAlign={"left"}
                                  onFocus={() => {
                                    handleInputFocus("login");
                                    setIsShowKeyboard(true);  }}
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
                  }}
                  placeholder="Адреса електронної пошти"
                  textAlign={"left"}
                                  onFocus={() => {
                                    handleInputFocus("email");
                                    setIsShowKeyboard(true);    }}
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
                                    setIsShowKeyboard(true);   }}
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
                onPress={keyboardHide}
              >
                <Text style={styles.btnTitle}>Зареєструватися</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.registerLink} activeOpacity={0.5}>
                <Text style={styles.registerLinkText}>
                  Вже є акаунт? Увійти
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
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
    width: "100%",
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
    gap: 16,
  },
  input: {
    padding: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E8E8E8",

    backgroundColor: "#F6F6F6",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
    width: 343,
  },

  showPassword: {
    top: -51,
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
