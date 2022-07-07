import * as React from "react"
import { TouchableOpacity } from "react-native"
import { Text } from "../typography"
import { styled } from "./index.styled"
import { Props } from "./index.type"

function Button(props: Props): JSX.Element {
    const { children = "", onPress = () => null, style = {}, textStyle = {}, type = "primary" } = props
    const styles = styled(type)

    return (
        <TouchableOpacity style={[styles.base, style]} onPress={onPress}>
            <Text style={[styles.label, textStyle]}>{children}</Text>
        </TouchableOpacity>
    )
}

export default Button
