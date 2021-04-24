import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function TodoItem(props) {
    const {text, key} = props.item;
    return (
        <TouchableOpacity onPress={()=>props.pressHandler(key)}>
            <Text style={styles.item}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item:{
        padding:16,
        marginTop: 16,
        color: '#222F36',
        borderColor: "#222F36",
        borderWidth: 2,
        borderStyle: 'dashed',
        borderRadius:10,
        fontSize:15,
    }
})
