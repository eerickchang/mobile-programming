import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Chat, Home, Search, User} from '../../../assets';

const Footer = ({search=<Search/>}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.7}>
        <Home />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.7}>
        {search}
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.7}>
        <Chat />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.7}>
        <User />
      </TouchableOpacity>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderColor: '#C0C0C0',
    height: 51,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 44,
    flexDirection: 'row',
    textAlign: 'center',
    backgroundColor: '#FFFFFF'
  },
});