import {StyleSheet, Text, View, Modal} from 'react-native';
import React, {useState} from 'react';
import {DetailsF_Content, DetailsF_Header, Footer, Gap} from '../../components';

const DetailsF = () => {
  return (
    <View>
      <DetailsF_Header />
      <Gap height={22} />

      <View style={styles.content}>
        <DetailsF_Content />
      </View>
      <Gap height={42} />
      <Footer />
    </View>
  );
};

export default DetailsF;

const styles = StyleSheet.create({
  content: {
    marginLeft: 15,
  },
});
