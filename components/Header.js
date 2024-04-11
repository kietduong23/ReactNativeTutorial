import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const Header = () => {
  return (
    <View style={styles.container}>
        <Image style={styles.icon} source={require("../assets/menu.png")} />
        <Text style={styles.text}>Home</Text>
        <Image style={styles.icon} source={require("../assets/notification.png")} />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    icon : {
        height: 20,
        width: 20
    },
    text: {
        fontWeight: "bold",
        fontSize: 20
    }
})