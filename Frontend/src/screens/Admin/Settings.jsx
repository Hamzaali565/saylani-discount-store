import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from '../../components/Header';
import color from '../../config/color';
import {useNavigation} from '@react-navigation/native';
import AppText from '../../components/AppText';
import OrderScreenComponent from '../../components/OrderScreenComponent';
const Settings = ({navigation}) => {
  const Navi = useNavigation();
  const DATEIS = () => {
    Navi.pop();
  };
  return (
    <View>
      <Header BackButton={'chevron-left'} onPress={DATEIS} />
      <View style={styles.container}>
        {/* heading */}
        <AppText style={styles.heading}>Orders</AppText>
        {/* orders */}
        <View style={styles.componentContainer}>
          <OrderScreenComponent
            ownerName="Mhammad Hamza"
            orderTime="Just Now"
            status="Active"
            phoneNumber="03111011484"
            price="300"
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
  heading: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: '700',
    color: color.blue,
  },
  componentContainer: {
    marginTop: 20,
  },
});
export default Settings;
