import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TaskCard = ({ taskInfo }) => {
    const onPress = async () => {

    }
  return (
    <Pressable onPress={onPress}>
    
    <View style = {styles.taskContainer}> 
    {/* {complete ? styles.taskCompleteContainer : styles.taskContainer}> */}
        <Text style={[styles.generalText, styles.title]}>{taskInfo.title}</Text>
      </View>
    </Pressable>

  )
}

export default TaskCard

const styles = StyleSheet.create({
    taskContainer: {
        borderColor: "rgba(241,190,72,0.9)",
        borderWidth: 1,
        backgroundColor: "rgba(0,115,255,0.92)",
        borderRadius: 10,
        padding: 10,
        width: Dimensions.get("window").width,
        marginVertical: 10,
        elevation: 10,
    },
    taskCompleteContainer: {
        borderColor: "rgba(0, 255, 108, 0.9)",
        borderWidth: 3,
        backgroundColor: "rgba(0, 255, 108, 0.8)",
        borderRadius: 10,
        padding: 10,
        width: Dimensions.get("window").width,
        marginVertical: 10,
        elevation: 10,
    },
    title: {
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        borderLeftWidth: 0,
        fontSize: 23,
        marginBottom: 20,
        alignSelf: 'flex-start'
    },
    generalText: {
        fontSize: 18,
        marginRight: 5,
    }
})