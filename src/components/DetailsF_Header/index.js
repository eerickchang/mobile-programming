import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {IconBack, Profile} from '../../../assets';
import Gap from '../Gap';

const DetailsF_Header = () => {
  return (
    <View>
      <Image
        source={require('../../../assets/images/DetailsUserImg.png')}
        style={styles.imgStyle}
      />
      <View style={styles.header}>
        <Gap width={25} />
        <View style={styles.borderIconBack}>
          <IconBack />
        </View>
        <Gap width={240} />
        <Profile />
      </View>
    </View>
  );
};

export default DetailsF_Header;

const styles = StyleSheet.create({
  imgStyle: {
    width: 353,
    height: 270,
  },
  borderIconBack: {
    width: 30,
    height: 30,
    backgroundColor: '#EDF5F7',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 3,
  },
  header: {
    position: 'absolute',
    flexDirection: 'row',
    marginTop: 16,
  },
});
