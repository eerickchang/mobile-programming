import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  DetailsF_BarDesc,
  DetailsF_Header,
  DetailsU_Bar,
  DetailsU_Header,
  Footer,
  HeaderUser,
  SignUpF_Button,
  SignUpF_Footer,
  SignUpF_Header,
  SignUpF_TextInput,
  DetailsF_BarSkill,
} from './src/components';
import SelectUser from './src/pages/SelectUser';
import HomeF from './src/pages/HomeF';
import BorderUser from './src/components/SelectUser_border';
import {SignUpF} from './src/pages';
const App = () => {
  return (
    <View>
      <DetailsF_BarSkill />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
