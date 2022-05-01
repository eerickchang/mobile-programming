import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { HeaderUser, ProfileF_Bottom, ProfileF_Top } from '../../components';

const ProfileF = () => {
  return (
    <View>
      <HeaderUser title='My Profile' />
      <ProfileF_Top />
      <ProfileF_Bottom />
    </View>
  );
};

export default ProfileF;

const styles = StyleSheet.create({});
