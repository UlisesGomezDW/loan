import { StyleSheet } from "react-native"
import { WHITE, BLACK } from "../../../constants/colors"
import { StyledProps } from "./index.types"

export const styled = ({ color = "dark", size = 0, weight = undefined }: StyledProps) =>
    StyleSheet.create({
        title: {
            color: color === "white" ? WHITE : color === "dark" ? BLACK : color,
            fontSize: size > 0 ? size : 24,
            fontWeight: weight || "600",
        },
        text: {
            color: color === "white" ? WHITE : color === "dark" ? BLACK : color,
            fontSize: size > 0 ? size : 12,
            fontWeight: weight || "300",
        },
    })
