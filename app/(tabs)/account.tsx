import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const Account = () => {
  return (
    <SafeAreaView>
      <Text>Account</Text>
      <Link href={"/accountsettings"}>Go to Account Settings</Link>
    </SafeAreaView>
  );
};

export default Account;

const styles = StyleSheet.create({});
