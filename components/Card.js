import React from 'react'
import { Image, Text, View, StyleSheet } from 'react-native'

const Card = () => {
    return (
        <View style={styles.container}>
            <View style={styles.cardBody}>
                <Text style={styles.cardText}>3</Text>
                <Image style={styles.img} source={require("../assets/news.png")} />
            </View>
            <Text style={styles.cardTitle}>News</Text>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        padding: 10,
        borderRadius: 10,
        width: 100,
        height: 70
    },
    img: {
        resizeMode: "cover",
        height: 30,
        width: 30
    },
    cardBody: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    cardTitle: {
        fontWeight: "bold",
        marginTop: 2
    },
    cardText: {
        color: "#949494",
        fontWeight: "bold"
    }
})