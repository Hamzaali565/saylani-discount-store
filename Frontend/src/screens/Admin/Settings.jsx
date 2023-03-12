import React from 'react';
import {View, Text} from 'react-native';
import Header from '../../components/Header';
import color from '../../config/color';
import {useNavigation} from '@react-navigation/native';
const Settings = ({navigation}) => {
  const Navi = useNavigation();
  const DATEIS = () => {
    Navi.goBack();
  };
  return (
    <View>
      <Header BackButton={'step-backward'} onPress={DATEIS} />
      <View>
        <Text
          style={{color: color.blue}}
          // onPress={navigation.navigate('Page4')}
        >
          Settings
        </Text>
      </View>
    </View>
  );
};

export default Settings;
