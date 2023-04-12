import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
} from 'react-native';
import Header from '../../components/Header';
import color from '../../config/color';
import {useNavigation} from '@react-navigation/native';
import {ConnectionStates} from 'mongoose';
import AppText from '../../components/AppText';
import CameraField from '../../components/CameraField';
import SimpleInput from '../../components/SimpleInput';
import CategoryInput from '../../components/CategoryInput';
import AppButton1 from '../../components/AppButton1';
import {launchImageLibrary} from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import axios from 'axios';
import {useSelector} from 'react-redux';
import {credential} from 'firebase-admin';

const AddNewItem = ({navigation}) => {
  const [systemUri, setSystemUri] = useState(null);
  const [visible, setvisble] = useState(false);

  const [image, setImage] = useState('');
  const [itemName, setItemName] = useState('');
  const [categoryText, setcategotyText] = useState('');
  const [description, setDescription] = useState('');
  const [unitName, setUnitNme] = useState('');
  const [unitPrice, setUnitPrice] = useState('');

  const Navi = useNavigation();
  const url = useSelector(state => state.url);
  const token = useSelector(state => state.token);
  // console.log(categoryText);
  const DATEIS = () => {
    Navi.pop();
  };
  // Action On Page Load
  useEffect(() => {
    Empty();
  }, []);

  // empty Fields
  const Empty = () => {
    setImage('');
    setItemName('');
    setcategotyText('');
    setDescription('');
    setUnitNme('');
    setUnitPrice('');
  };
  // image Upload to Firebase storage bucket
  const Upload = () => {
    const launch = launchImageLibrary({quality: 0.5}, fileobj => {
      setSystemUri(fileobj.assets[0].uri);
      const uploadTask = storage()
        .ref()
        .child(`/userprofile/${Date.now()}`)
        .putFile(fileobj.assets[0].uri);

      uploadTask.on(
        'state_changed',
        snapshot => {
          var progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          if (progress == 100);
        },
        error => {
          alert('error uploading image');
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
            setImage(downloadURL);
            console.log('url', downloadURL);
          });
        },
      );
      // }
    });
  };
  // Add product API call
  const AddProduct = async () => {
    try {
      let response = await axios.post(
        `${url}/api/v1/product`,
        {
          image: image,
          category: categoryText,
          itemName: itemName,
          description: description,
          unitName: unitName,
          unitPrice: unitPrice,
        },
        {
          headers: {
            Cookie: `Token=${token}`,
          },
        },
      );
      console.log('response', response);
    } catch (err) {
      console.log('errror', err);
    }
  };

  return (
    <View style={styles.container}>
      <Header BackButton={'chevron-left'} onPress={DATEIS} />
      <View style={styles.container2}>
        {/* Heading */}
        <View style={styles.headingContainer}>
          <AppText style={styles.heading}>Add New Product</AppText>
        </View>
        {/* Fields */}
        <View style={styles.fieldContainer}>
          {systemUri == null ? (
            <CameraField
              style={styles.field1}
              fontStyle={styles.font}
              onPress={Upload}
            />
          ) : (
            <TouchableOpacity
              style={{
                marginTop: '2%',
                borderWidth: 1,
                // borderColor: 'red',
                borderRadius: 10,
                height: '30%',
              }}
              onPress={Upload}>
              <Image
                source={{uri: systemUri}}
                style={{
                  resizeMode: 'cover',
                  height: '100%',
                  width: '100%',
                  borderRadius: 10,
                }}
              />
            </TouchableOpacity>
          )}
          <SimpleInput
            placeholder="Item Name"
            style={styles.inputStyle}
            onChangeText={text => {
              setItemName(text);
            }}
          />
          <CategoryInput title={categoryText} onPress={() => setvisble(true)} />
          <SimpleInput
            placeholder="Description"
            onChangeText={text => {
              setDescription(text);
            }}
          />
          <View style={styles.TextyInput}>
            <AppText style={styles.texty}>Unit Name:</AppText>
            <SimpleInput
              placeholder="Pcs./Kg/Dozen"
              style={styles.input}
              onChangeText={text => {
                setUnitNme(text);
              }}
            />
          </View>
          <View style={styles.TextyInput}>
            <AppText style={styles.texty}>Unit Price:</AppText>
            <SimpleInput
              placeholder="Pkr 200"
              style={styles.input}
              onChangeText={text => {
                setUnitPrice(text);
              }}
            />
          </View>
          <AppButton1
            style={styles.button}
            textStyle={styles.buttonText}
            onPress={AddProduct}
            title="Add Product"
          />
          {/* <SimpleInput /> */}
          {/* <SimpleInput /> */}
        </View>
      </View>
      <View>
        <Modal visible={visible} transparent={true}>
          <View
            style={{
              // opacity: 0.5,
              // backgroundColor: color.black,
              flex: 1,
              paddingHorizontal: '10%',
              // alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                backgroundColor: color.white,
                height: '30%',
                borderRadius: 10,
                borderColor: color.grey,
                borderWidth: 2,
                // alignItems: 'center',
              }}>
              <View
                style={{
                  alignItems: 'center',
                  flex: 1,
                  justifyContent: 'center',
                  // marginTop: '10%',
                }}>
                <AppText
                  style={styles.cate}
                  onPress={event => {
                    setcategotyText(
                      event._dispatchInstances.memoizedProps.children,
                    );
                    setvisble(false);
                  }}>
                  Fruits
                </AppText>
                <View style={styles.sep} />
                <AppText
                  onPress={event => {
                    setcategotyText(
                      event._dispatchInstances.memoizedProps.children,
                    );
                    setvisble(false);
                  }}
                  style={styles.cate}>
                  Meat
                </AppText>
                <View style={styles.sep} />
                <AppText
                  onPress={event => {
                    setcategotyText(
                      event._dispatchInstances.memoizedProps.children,
                    );
                    setvisble(false);
                  }}
                  style={styles.cate}>
                  Vegetables
                </AppText>
              </View>
            </View>
          </View>
        </Modal>
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
  cate: {
    fontSize: 20,
    // height: '30%',
    marginVertical: 20,
  },
  sep: {
    height: 3,
    width: '100%',
    backgroundColor: color.grey,
  },
});
export default AddNewItem;
