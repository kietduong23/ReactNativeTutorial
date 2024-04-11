import 'react-native-gesture-handler';
import { SafeAreaView, StatusBar, StyleSheet, Image, Pressable } from 'react-native';
import Home from './screens/Home';
import Setting from './screens/Setting';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#F5F5F5",
          },
          headerTintColor: '#000000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: () => (
            <Pressable onPress={() => alert("Notification pressed")}>
              <Image style={styles.icon} source={require("./assets/notification.png")} />
            </Pressable>
          ),
        }}
      >
        <Drawer.Screen name="Home" component={Home}/>
        <Drawer.Screen name="Setting" component={Setting} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  icon: {
    height: 20,
    width: 20,
    marginHorizontal: 20
  },
});
