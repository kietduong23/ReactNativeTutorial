import React from 'react'
import { Image, StyleSheet, Text, View, Platform } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const ProfileCard = () => {
    return (
        <View style={[styles.box, styles.boxShadow]}>

            {/* Friend list */}
            <View style={styles.friendImgContainer}>
                <Image style={styles.friendImg} source={require("../assets/profile.jpg")} />
                <Image style={styles.friendImg} source={require("../assets/profile.jpg")} />
            </View>

            <LinearGradient
                colors={['#FF0000', '#DF007A', '#BD00FF']}
                style={[styles.background]}
            />

            <View style={[styles.cardBody, styles.boxShadow]}>
                <Image style={styles.profileImg} source={require("../assets/profile.jpg")} />
                <View style={styles.profileContainer}>
                    <Text style={[styles.text, styles.profileName]}>Levi Ackerman</Text>
                    <Text style={styles.text}>Captain</Text>
                </View>

                <View style={styles.statusContainer}>

                    <View style={styles.statusItem}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <Text style={[styles.text, styles.statusText]}>Attendance</Text>
                            <Text style={[styles.text, styles.statusText]}>80%</Text>
                        </View>
                        <View style={[styles.bar, styles.boxShadow]}>
                            <View style={styles.barOverlay} />
                        </View>
                    </View>

                    <View style={styles.statusItem}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <Text style={[styles.text, styles.statusText]}>Fee</Text>
                            <Text style={[styles.text, styles.statusText]}>80%</Text>
                        </View>
                        <View style={[styles.bar, styles.boxShadow]}>
                            <View style={styles.barOverlay} />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ProfileCard

const styles = StyleSheet.create({
    box: {
        marginVertical: 5,
    },
    background: {
        borderRadius: 25,
        height: 135,
        width: "100%"
    },
    boxShadow: {
        ...Platform.select({
            ios: {
                shadowColor: "#000000",
                shadowOffset: {
                    height: 5,
                    width: 0
                },
                shadowRadius: 4,
                shadowOpacity: 0.4
            },
            android: {
                elevation: 6,
                shadowColor: "#000000",
            }
        })
    },
    cardBody: {
        position: 'absolute',
        left: 30,
        right: 30,
        top: 0
    },
    text: {
        color: "white"
    },
    friendImgContainer: {
        flexDirection: "row",
        justifyContent: "flex-end",
        marginBottom: 5
    },
    friendImg: {
        height: 25,
        width: 25,
        marginHorizontal: 5,
        borderRadius: 25 / 2,
        borderColor: "#000000",
        borderWidth: 1
    },
    profileImg: {
        resizeMode: "cover",
        height: 75,
        width: 75,
        borderRadius: 75 / 2,
        borderColor: "#000000",
        borderWidth: 1
    },
    profileName: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5,
    },
    bar: {
        height: 3,
        width: "100%",
        // backgroundColor: "#FFE500",
        backgroundColor: "#FFFFFF",
        borderRadius: 5
    },
    barOverlay: {
        position: "absolute",
        left: 0,
        height: 3,
        width: "80%",
        backgroundColor: "#FFE500",
        borderRadius: 5
    },
    statusContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 5,
    },
    statusItem: {
        width: 120
    },
    statusText: {
        fontSize: 11,
        fontWeight: 300,
        marginBottom: 5
    },
    profileContainer: {
        flexDirection: "column"
    }
})