import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { People } from '../../../assets'
import Gap from '../Gap'

const BorderUser = ({color='#D2F5FD', Title, SubTitle}) => {
  return (
    <TouchableOpacity activeOpacity={0.6}>
      <View style={styles.wrapper(color)}>
        <People style={styles.icon}/>
        <View style={{marginLeft: 55.98}}>
          <Gap height={41}/>
          <Text style={styles.textTitle}>{Title}</Text>
          <Text style={styles.textSubtile}>{SubTitle}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default BorderUser

const styles = StyleSheet.create({
  wrapper: (color) => ({
    backgroundColor: color, 
    height: 135, 
    width: 286, 
    borderRadius: 15, 
    flexDirection: 'row'
  }),
  icon: {
    marginLeft: 25.4,
    marginTop: 38
  },
  textTitle: {
    fontSize: 18, 
    fontWeight: 'bold', 
    color: '#000000',
    fontFamily: 'Segoe UI Bold'
  },
  textSubtile: {
    fontSize: 14, 
    color: '#000000' 
  }
})