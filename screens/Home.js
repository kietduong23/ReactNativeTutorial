import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import ProfileCard from '../components/ProfileCard';
import Card from '../components/Card';


const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Profile */}
      <ProfileCard />

      {/* School Updates */}
      <View>
        <Text style={styles.heading}>School Updates</Text>
        <View style={styles.cardContainer}>
          <Card />
          <Card />
          <Card />
        </View>
      </View>

      {/* Academics */}
      <View>
        <Text style={styles.heading}>Academics</Text>
        <View style={styles.cardContainer}>
          <Card />
          <Card />
          <Card />
        </View>
      </View>

      {/* Communication */}
      <View>
        <Text style={styles.heading}>Communication</Text>
        <View style={styles.cardContainer}>
          <Card />
          <Card />
          <Card />
        </View>
      </View>

      {/* Today */}
      <View>
      <Text style={styles.heading}>Today</Text>
        <View style={styles.cardContainer}>
          <Card />
          <Card />
          <Card />
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footerContainer}>
        <View style={styles.footerItem}>
          <Text>Home</Text>
        </View>
        <View style={styles.footerItem}>
          <Text>Assignment</Text>
        </View>
        <View style={styles.footerItem}>
          <Text>Homework</Text>
        </View>
        <View style={styles.footerItem}>
          <Text>Pay Fee</Text>
        </View>
      </View>

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    paddingHorizontal: 25,
    marginTop: 5
  },
  heading: {
    fontWeight: "bold",
    color: "#949494",
    marginVertical: 10
  },
  cardContainer: {
    flexDirection: "row",
    columnGap: 10
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    // borderTopColor: "#949494",
    // borderTopWidth: 1,
    marginTop: 30,
    flexWrap: "wrap",
  },
  footerItem: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 25
  }
})