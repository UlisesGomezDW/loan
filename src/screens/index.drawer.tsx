import * as React from "react"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { View, Text, Button, StatusBar, Platform } from "react-native"
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
    const headerHeight = useSafeAreaInsets()
    return (
        <Drawer.Navigator
            screenOptions={{
                header: (props) => (
                    <>
                        {Platform.OS == "ios" && <StatusBar barStyle={"light-content"} />}
                        <Navbar
                            title="Miér. 6 Jul"
                            onClick={() => props.navigation.openDrawer()}
                            style={
                                Platform.OS == "ios"
                                    ? { paddingTop: headerHeight.top / 2, height: 80 + headerHeight.top / 2 }
                                    : {}
                            }
                        />
                    </>
                ),
            }}
            drawerContent={() => <DrawerComponent />}
        >
            <Drawer.Screen name="D.Home" component={DrawerScreen} />
        </Drawer.Navigator>
    )
}

export default App
