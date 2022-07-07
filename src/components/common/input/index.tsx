import * as React from "react"
import { View, TextInput } from "react-native"
import { Text } from "../typography"
import { styled } from "./index.styled"
import { Props } from "./index.type"

function Input(props: Props): JSX.Element {
    const { label = null, value = "", placeholder = "", onChange = () => null, style = {}, labelStyle = {} } = props
    const styles = styled("light")

    return (
        <View style={[styles.base, style]}>
            {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
            <TextInput style={styles.input} value={value} placeholder={placeholder} onChangeText={onChange} />
        </View>
    )
}

export default Input
