import React from "react";
import { View, Text, TextInput } from "react-native";
import styles from "./style";

export default function Input({
  required,
  title,
  placeholder,
  value,
  setValue,
  error,
}) {
  return (
    <View style={styles.inputContainer}>
      {title ? (
        <Text style={styles.label}>
          <View style={styles.requiredContainer}> 
            <Text style={styles.required}>{required ? "* " : "   "}</Text>
          </View>
          {title}
        </Text>
      ) : (
        <View></View>
      )}
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        value={value}
        placeholder={placeholder}
      ></TextInput>
      {error ? <Text style={styles.errorMessage}>{error}</Text> : <View></View>}
    </View>
  );
}
