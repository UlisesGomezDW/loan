import * as React from "react"
import { Text as Base } from "react-native"
import { Props } from "./index.types"
import { styled } from "./index.styled"

function Title(props: Props): JSX.Element {
    return (
        <Base {...props} style={[styled({ color: props.color, size: props.size }).title, props.style]}>
            {props.children}
        </Base>
    )
}

function Text(props: Props): JSX.Element {
    return (
        <Base {...props} style={[styled({ color: props.color, size: props.size }).text, props.style]}>
            {props.children}
        </Base>
    )
}

export { Title, Text }
