import { Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    general: {
        fontFamily: 'InterRegular',
        fontSize: 16,
        color: "#000"
    },
    bold: {
        fontFamily: "InterBold"
    },
    size20: {
        fontSize: 20
    },
    white: {
        color: '#FFF'
    }
})

export default function StyledText({children, bold, size20, white, ...props}) {
    const textStyles = [
        styles.general,
        bold && styles.bold,
        size20 && styles.size20,
        white && styles.white,
    ];
    return <Text style={[textStyles, { ...props }]}>{children}</Text>
}