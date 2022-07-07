import { TextProps } from "react-native"

export interface StyledProps {
    color?: "white" | "dark" | string
    size?: number
    weight?: "bold" | "600" | "normal" | "100" | "200" | "300" | "400" | "500" | "700" | "800" | "900" | undefined
}

export interface Props extends TextProps, StyledProps {}
