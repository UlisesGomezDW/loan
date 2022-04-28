import { TextProps } from "react-native"

export interface StyledProps {
    color?: "white" | "dark" | string
    size?: number
}

export interface Props extends TextProps, StyledProps {}
