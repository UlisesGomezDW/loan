import * as React from "react"
import { SafeAreaView, View } from "react-native"
import { DrawerItem } from "@react-navigation/drawer"
import Icon from "../../../assets/icons/sun"
import { PRIMARY, SECONDARY, WHITE } from "../../../constants/colors"
import { CURRENT_DAY, CURRENT_MONTH, CURRENT_DATE_DAY, days, months } from "../../../utils/date"
import { sliceString } from "../../../utils/string"
import { Title } from "../../common/typography"
import { styled } from "./index.styled"

function Drawer() {
    return (
        <SafeAreaView style={styled.container}>
            <View style={styled.head}>
                <Title color="white">{`${sliceString(days[CURRENT_DAY], 0, 3)}. ${CURRENT_DATE_DAY} ${sliceString(
                    months[CURRENT_MONTH],
                    0,
                    3
                )}`}</Title>
                <Icon height={30} width={30} />
            </View>
            <DrawerItem
                label="Clientes"
                activeBackgroundColor={SECONDARY}
                inactiveBackgroundColor={PRIMARY}
                onPress={() => console.log("hola")}
                style={{ width: "100%" }}
                labelStyle={{ color: WHITE }}
            />
        </SafeAreaView>
    )
}

export default Drawer
