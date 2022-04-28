import * as React from "react"
import { View, ViewProps } from "react-native"
import { WHITE } from "../../constants/colors"

interface Props extends ViewProps {
    color?: string
}

function Screen(props: Props): JSX.Element {
    return <View {...props} style={[{ flex: 1, backgroundColor: props.color || WHITE }, props.style]} />
}

export default Screen
