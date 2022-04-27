import * as React from "react"
import { View, Text, Button } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { useNavigation } from "@react-navigation/native"
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
            <Text>Hola Screen</Text>
        </View>
    )
}

function HomeScreen() {
    const navigation = useNavigation()

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Home Screen uwu</Text>
            <Button onPress={() => navigation.navigate("Start")} title="to home" />
        </View>
    )
}

const Stack = createNativeStackNavigator()

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Start" component={DrawerNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App
