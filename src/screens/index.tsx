import * as React from "react"
import { View, Text } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createDrawerNavigator } from "@react-navigation/drawer"
import Navbar from "./../components/navbar"

const Drawer = createDrawerNavigator()

function DrawerNavigator() {
    return (
        <Drawer.Navigator screenOptions={{ header: () => <Navbar /> }}>
            <Drawer.Screen name="D.Home" component={DrawerScreen} />
        </Drawer.Navigator>
    )
}

function DrawerScreen() {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Drawer Screen</Text>
        </View>
    )
}

function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Home Screen uwu</Text>
        </View>
    )
}

const Stack = createNativeStackNavigator()

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Start">
                <Stack.Screen name="Start" component={DrawerNavigator} />
                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App
