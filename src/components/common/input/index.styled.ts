import { StyleSheet } from "react-native"
import { WHITE, BLACK } from "../../../constants/colors"

export const styled = (theme: "dark" | "light") =>
    StyleSheet.create({
        base: {
            width: "100%",
        },
        input: {
            height: 48,
            width: "100%",
            backgroundColor: "transparent",
            borderWidth: 3,
            borderColor: theme === "light" ? WHITE : BLACK,
            borderRadius: 15,
            color: theme === "light" ? WHITE : BLACK,
            fontSize: 20,
            paddingLeft: 10,
        },
        label: {
            color: theme === "light" ? WHITE : BLACK,
            fontSize: 20,
            marginBottom: 5,
            fontWeight: "400",
        },
    })
