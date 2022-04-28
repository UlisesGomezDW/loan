import * as React from "react"
import { View, Text, Button } from "react-native"
import { createDrawerNavigator } from "@react-navigation/drawer"
import Navbar from "../components/common/navbar"
import DrawerComponent from "./../components/sections/drawer"

function DrawerScreen() {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Hola Screen</Text>
        </View>
    )
}

const Drawer = createDrawerNavigator()

function App() {
    return (
        <Drawer.Navigator screenOptions={{ header: () => <Navbar /> }} drawerContent={() => <DrawerComponent />}>
            <Drawer.Screen name="D.Home" component={DrawerScreen} />
        </Drawer.Navigator>
    )
}

export default App
