import * as React from "react"
import Screen from "./../../components/layout/screen"
import { Button } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { PRIMARY } from "./../../constants/colors"

function HomeScreen() {
    const navigation = useNavigation()

    return (
        <Screen color={PRIMARY} style={{ alignItems: "center", justifyContent: "center" }}>
            <Button onPress={() => navigation.navigate("Start" as never)} title="to home" />
        </Screen>
    )
}

export default HomeScreen
