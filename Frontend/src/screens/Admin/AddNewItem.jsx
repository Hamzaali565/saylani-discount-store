import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from '../../components/Header';
import color from '../../config/color';
import {useNavigation} from '@react-navigation/native';
import {ConnectionStates} from 'mongoose';
import AppText from '../../components/AppText';
import CameraField from '../../components/CameraField';
import SimpleInput from '../../components/SimpleInput';
import CategoryInput from '../../components/CategoryInput';
import AppButton1 from '../../components/AppButton1';
const AddNewItem = ({navigation}) => {
  const Navi = useNavigation();
  const DATEIS = () => {
    Navi.goBack();
  };
  const Move = () => {
    navigation.navigate('orderDetails');
  };
  return (
    <View style={styles.container}>
      <Header BackButton={'step-backward'} onPress={DATEIS} />
      <View style={styles.container2}>
        {/* Heading */}
        <View style={styles.headingContainer}>
          <AppText style={styles.heading} onPress={Move}>
            Add New Product
          </AppText>
        </View>
        {/* Fields */}
        <View style={styles.fieldContainer}>
          <CameraField style={styles.field1} fontStyle={styles.font} />
          <SimpleInput placeholder="Item Name" style={styles.inputStyle} />
          <CategoryInput />
          <SimpleInput placeholder="Description" />
          <View style={styles.TextyInput}>
            <AppText style={styles.texty}>Unit Name:</AppText>
            <SimpleInput placeholder="Pcs./Kg/Dozen" style={styles.input} />
          </View>
          <View style={styles.TextyInput}>
            <AppText style={styles.texty}>Unit Price:</AppText>
            <SimpleInput placeholder="Pkr 200" style={styles.input} />
          </View>
          <AppButton1
            style={styles.button}
            textStyle={styles.buttonText}
            title="Add Product"
          />
          {/* <SimpleInput /> */}
          {/* <SimpleInput /> */}
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
  container2: {
    paddingHorizontal: 20,
  },
  field1: {
    marginTop: '10%',
    paddingVertical: '10%',
  },
  inputStyle: {
    marginBottom: '5%',
  },
  font: {
    fontSize: 60,
  },
  heading: {
    color: color.blue,
    fontWeight: '600',
    fontSize: 20,
  },
  headingContainer: {
    marginTop: '3%',
    paddingLeft: 20,
  },
  texty: {
    color: color.blue,
    fontWeight: '600',
    fontSize: 15,
  },
  TextyInput: {
    // marginTop: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    width: '50%',
  },
  button: {
    padding: 10,
    marginTop: '10%',
    width: '70%',
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '500',
  },
});
export default AddNewItem;
