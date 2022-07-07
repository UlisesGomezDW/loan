import { ViewStyle, TextStyle } from "react-native"

export type Props = {
    label?: string
    value: string
    placeholder?: string
    onChange: (value: string) => void
    style?: ViewStyle
    labelStyle?: TextStyle
    theme?: "dark" | "light"
}
