import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

const Answer = (props) => {
    return (
        <TouchableOpacity onPress={() => console.log(props, 'Button Pressed')} style={styles.TagContainer}>
        <View style={styles.item}>
            <View style={styles.itemleft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
</TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    item:{
        backgroundColor: '#F8E559',
        padding: 15,
        borderRadius: 15,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 1,
    },
    itemleft:{
        flexDirection: "row",
        alignItems: "center",
        flexWrap: 'wrap',
    },
    square:{
        width: 24,
        height: 24,
        backgroundColor:'#864AF9',
        opacity: 0.6,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText:{
        maxWidth: '80%',

    },
    circular:{
        width: 24,
        height: 24,
        backgroundColor:'#f94a87',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    TagContainer: {
        elevation: 5,
        backgroundColor: "transparent",
        borderRadius: 8,
        width: "auto",
        height: "auto",
        margin: '2%',
        padding: '2%',
    },
});
export default Answer;