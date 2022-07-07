import { StyleSheet } from "react-native"
import { WHITE, PRIMARY } from "../../../constants/colors"

export const styled = (type: "primary" | "secondary" | "info") =>
    StyleSheet.create({
        base: {
            width: "100%",
            height: 48,
            backgroundColor: type === "primary" ? PRIMARY : WHITE,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 15,
        },
        label: {
            color: type === "secondary" ? PRIMARY : WHITE,
            fontSize: 24,
            fontWeight: "500",
        },
    })
