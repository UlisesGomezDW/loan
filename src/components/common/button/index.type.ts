import { ViewStyle, TextStyle } from "react-native"

export type Props = {
    children: string
    style?: ViewStyle
    textStyle?: TextStyle
    type?: "primary" | "secondary" | "info"
    onPress: () => void
}
