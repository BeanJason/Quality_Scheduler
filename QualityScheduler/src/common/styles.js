import { StyleSheet, Dimensions, StatusBar} from "react-native";

export const commonStyles = StyleSheet.create({
    safeContainer:{
        flex: 1,
        marginTop: StatusBar.currentHeight,
    },
})