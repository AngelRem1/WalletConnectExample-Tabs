import "./global";

import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Platform } from "react-native";
import WalletConnectProvider from "@walletconnect/react-native-dapp";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./navigation/navigation";
 

// import ConnectT from "./screens/connectToWallet";
import ConnectToWallet from "./screens/connectToWallet";

const SCHEME_FROM_APP_JSON = "walletconnect-example";

export default function App() {
  return (
    
    <SafeAreaProvider>
      <Navigation/>
      <StatusBar  />
    </SafeAreaProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
