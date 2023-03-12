import React from 'react';
import {View, Text, StyleSheet, TextInput, Image} from 'react-native';
import Header from '../../components/Header';
import color from '../../config/color';
import {useNavigation} from '@react-navigation/native';
import AppText from '../../components/AppText';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CameraField from '../../components/CameraField';
import SimpleInput from '../../components/SimpleInput';
import AppButton1 from '../../components/AppButton1';
import AllProductsComponent from '../../components/AllProductsComponent';

const Orders = ({navigation}) => {
  const Navi = useNavigation();
  const DATEIS = () => {
    Navi.goBack();
  };
  const Move = () => {
    navigation.navigate('settings');
  };
  return (
    // <View>
    //   <Header BackButton={'step-backward'} onPress={DATEIS} />
    <View>
      <AppText style={styles.heading}>Settings</AppText>
      <View style={styles.imageContaier}>
        <Image
          style={styles.image}
          source={require('../../assets/images/Ellipse.jpg')}
        />
      </View>
      <View style={styles.threeItemsContainer}>
        <TextInput
          maxLength={15}
          style={styles.input}
          placeholder="Update Full Name"
          placeholderTextColor={color.grey2}
        />
        <FontAwesome5
          style={[{color: color.grey2, fontSize: 30}]}
          name="edit"
        />
      </View>
      <View style={styles.serpetor} />

      {/* categoty Edit */}
      <View style={styles.cameraField}>
        <CameraField style={styles.categoryImage} fontStyle={{fontSize: 40}} />
      </View>
      <View style={styles.categoryInputButton}>
        <SimpleInput style={styles.categoryInput} />
        <AppButton1
          style={styles.categoryButton}
          title="ADD"
          textStyle={styles.categoryButtonText}
        />
      </View>

      {/* show Category */}

      <AppText style={styles.allCategoriesText}>All Categories</AppText>
      <AllProductsComponent />
    </View>
    // </View>
  );
};
const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    color: color.blue,
    fontWeight: '600',
    alignSelf: 'center',
    marginTop: 20,
  },
  imageContaier: {
    marginTop: '5%',
    // height: '100%',
    // width: '100%',
    alignItems: 'center',
    // flex: 1,
  },
  image: {
    height: 150,
    width: 150,
  },
  threeItemsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 50,
    marginTop: '5%',
  },
  serpetor: {
    height: 5,
    backgroundColor: color.BackGrey,
    width: '80%',
    alignSelf: 'center',
  },
  input: {
    color: color.black,
  },
  cameraField: {
    marginTop: '5%',
  },
  categoryImage: {
    paddingVertical: 30,
  },
  categoryInput: {
    width: '50%',
  },
  categoryButton: {
    width: '20%',
    marginTop: 20,
    height: 50,
    padding: 0,
  },
  categoryButtonText: {
    fontSize: 13,
    fontWeight: '700',
  },
  categoryInputButton: {
    flexDirection: 'row',
    marginTop: '5%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  allCategoriesText: {
    color: color.blue,
    fontSize: 20,
    fontWeight: '700',
    marginTop: '5%',
  },
});
export default Orders;
