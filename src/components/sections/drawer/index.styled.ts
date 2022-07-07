import { StyleSheet } from "react-native"
import { PRIMARY } from "../../../constants/colors"

export const styled = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: PRIMARY,
        alignItems: "center",
    },
    head: {
        alignItems: "center",
        marginBottom: 50,
    },
    margin: {
        marginBottom: 30,
    },
    item: {
        height: 60,
        width: "100%",
        paddingLeft: 35,
        borderColor: "#28079B",
        borderBottomWidth: 1,
        borderTopWidth: 1,
        justifyContent: "center",
        marginBottom: 10,
    },
    itemLabel: {
        color: "#FFF",
        fontSize: 20,
        fontWeight: "500",
    },
})
