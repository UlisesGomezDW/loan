import * as React from "react"
import { SafeAreaView, View } from "react-native"
import { DrawerItem } from "@react-navigation/drawer"
import Icon from "../../../assets/icons/sun"
import { PRIMARY, SECONDARY, WHITE } from "../../../constants/colors"
import { CURRENT_DAY, CURRENT_MONTH, CURRENT_DATE_DAY, days, months } from "../../../utils/date"
import { sliceString } from "../../../utils/string"
import { Title } from "../../common/typography"
import { styled } from "./index.styled"

const routes = [
    { name: "Visitas", path: "" },
    { name: "Préstamos", path: "" },
    { name: "Clientes", path: "" },
    { name: "Historial", path: "" },
    { name: "Configuración", path: "" },
]

function Drawer() {
    return (
        <SafeAreaView style={styled.container}>
            <View style={styled.head}>
                <Title size={28} color={WHITE} style={styled.margin}>{`${sliceString(
                    days[CURRENT_DAY],
                    0,
                    3
                )}. ${CURRENT_DATE_DAY} ${sliceString(months[CURRENT_MONTH], 0, 3)}`}</Title>
                <Icon height={75} width={75} style={styled.margin} />
                <Title size={28} color={WHITE}>
                    {"Hola"}
                </Title>
            </View>
            {routes?.map(({ name = "" }, index) => (
                <DrawerItem
                    key={index}
                    label={name}
                    activeBackgroundColor={SECONDARY}
                    inactiveBackgroundColor={PRIMARY}
                    onPress={() => console.log("hola")}
                    style={styled.item}
                    labelStyle={styled.itemLabel}
                />
            ))}
        </SafeAreaView>
    )
}

export default Drawer
