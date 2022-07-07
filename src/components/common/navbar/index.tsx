import React from "react"
import { View, TouchableOpacity, ViewStyle } from "react-native"
import { Title } from "../typography"
import { PRIMARY, WHITE } from "./../../../constants/colors"
import Icon from "./../../../assets/icons/menu"

type Props = {
    onClick: () => void
    title: string
    style?: ViewStyle
}

function Navbar({ title = "", onClick = () => null, style = {} }: Props): JSX.Element {
    return (
        <View
            style={{
                backgroundColor: PRIMARY,
                height: 80,
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingLeft: 20,
                paddingRight: 20,
                ...style,
            }}
        >
            <TouchableOpacity onPress={onClick}>
                <Icon height={30} width={30} />
            </TouchableOpacity>
            <Title size={32} color={WHITE} weight={"500"}>
                {title}
            </Title>
            <View style={{ width: 30 }} />
        </View>
    )
}

export default Navbar
