import { StatusBar, StyleSheet, Text, View, Image } from 'react-native';
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
          <Card title="News" text={3} image={require("../assets/news.png")} />
          <Card title="Events" text={3} image={require("../assets/events.png")} />
          <Card title="Bulletin" text={3} image={require("../assets/bulletin.png")} />
        </View>
      </View>

      {/* Academics */}
      <View>
        <Text style={styles.heading}>Academics</Text>
        <View style={styles.cardContainer}>
          <Card title="Assignment" text={3} image={require("../assets/assignment.png")} />
          <Card title="Fee" text={3} image={require("../assets/fee.png")} />
          <Card title="Attendance" text={3} image={require("../assets/attendance.png")} />
        </View>
      </View>

      {/* Communication */}
      <View>
        <Text style={styles.heading}>Communication</Text>
        <View style={styles.cardContainer}>
          <Card title="Chat" text={3} image={require("../assets/chat.png")} />
          <Card title="Fee" text={3} image={require("../assets/sms.png")} />
          <Card title="Camera" text={3} image={require("../assets/camera.png")} />
        </View>
      </View>

      {/* Today */}
      <View>
        <Text style={styles.heading}>Today</Text>
        <View style={styles.cardContainer}>
          <View style={styles.todayListItem}>
            <View style={styles.todayImgContainer}>
              <Image style={styles.todayItemImg} source={require("../assets/quote.png")} />
            </View>
            <Text style={styles.todayItemTitle}>Quote</Text>
          </View>
          <View style={styles.todayListItem}>
            <View style={styles.todayImgContainer}>
              <Image style={styles.todayItemImg} source={require("../assets/thought.png")} />
            </View>
            <Text style={styles.todayItemTitle}>Thought</Text>
          </View>
          <View style={styles.todayListItem}>
            <View style={styles.todayImgContainer}>
              <Image style={styles.todayItemImg} source={require("../assets/word.png")} />
            </View>
            <Text style={styles.todayItemTitle}>Word</Text>
          </View>
          <View style={styles.todayListItem}>
            <View style={styles.todayImgContainer}>
              <Image style={styles.todayItemImg} source={require("../assets/edu.png")} />
            </View>
            <Text style={styles.todayItemTitle}>Edu-news</Text>
          </View>
          <View style={styles.todayListItem}>
            <View style={styles.todayImgContainer}>
              <Image style={styles.todayItemImg} source={require("../assets/city.png")} />
            </View>
            <Text style={styles.todayItemTitle}>City</Text>
          </View>
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
    paddingTop: 5
  },
  heading: {
    fontWeight: "bold",
    color: "#949494",
    marginVertical: 10
  },
  cardContainer: {
    flexDirection: "row",
    columnGap: 10,
    justifyContent: "center"
  },
  todayItemImg: {
    width: 35,
    height: 35
  },
  todayImgContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    padding: 10
  },
  todayListItem: {
    justifyContent: "center",
    alignItems: "center"
  },
  todayItemTitle: {
    fontWeight: "bold",
    fontSize: 12,
    marginTop: 5
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