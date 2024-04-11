import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const TabBar = () => {
    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <Text>Home</Text>
            </View>
            <View style={styles.item}>
                <Text>Assignment</Text>
            </View>
            <View style={styles.item}>
                <Text>Homwwork</Text>
            </View>
            <View style={styles.item}>
                <Text>Pay Fee</Text>
            </View>
        </View>
    )
}

export default TabBar

const styles = StyleSheet.create({
    footerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderTopColor: "#949494",
        borderTopWidth: 1,
        position: "absolute",
        bottom: 10,
        left: 0,
        right: 0
    },
    footerItem: {
        backgroundColor: "#FFFFFF",
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 25
    }
})