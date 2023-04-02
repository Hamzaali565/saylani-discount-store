import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Header from '../../components/Header';
import color from '../../config/color';
import {useNavigation} from '@react-navigation/native';
import AppText from '../../components/AppText';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CameraField from '../../components/CameraField';
import SimpleInput from '../../components/SimpleInput';
import AppButton1 from '../../components/AppButton1';
import AllProductsComponent from '../../components/AllProductsComponent';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import {setLogin, setObject} from '../../store/action';
import {launchImageLibrary} from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
const Orders = ({navigation}) => {
  const [fullName, setFullName] = useState('');
  const [image, setImage] = useState('');

  const [systemUri, setSystemUri] = useState(null);
  const [check, setCheck] = useState(false);

  const [allCategories, setAllCategories] = useState([]);
  const Navi = useNavigation();
  const myobj = useSelector(state => state.object._id);
  // const myobj = '63f5c5766ba8f65c2790d92f';
  const url = useSelector(state => state.url);
  const Dispatch = useDispatch();

  useEffect(() => {
    console.log('====================================');
    console.log(myobj);
    console.log('====================================');
    Categories();
  }, []);

  const DATEIS = () => {
    Navi.pop();
  };
  const Move = () => {
    navigation.navigate('settings');
  };
  const Categories = async () => {
    try {
      let response = await axios.get(`${url}/categories`, {
        withCredentials: true,
      });
      console.log('response', response.data.data);
      setAllCategories(response.data.data.reverse());
    } catch (error) {
      console.log('error', error);
    }
  };
  const updateName = async () => {
    try {
      let response = await axios.put(
        `${url}/api/v1/product/${myobj}`,
        {fullName},
        {withCredentials: true},
      );
      console.log('response', response.data.data);
      Dispatch(setObject(response.data.data));
      setFullName('');
    } catch (error) {
      console.log('====================================');
      console.log(error);
      console.log('====================================');
    }
  };
  const Upload = async () => {
    const launch = await launchImageLibrary({quality: 0.5}, fileobj => {
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
    });
  };
  const AddCategory = async () => {
    try {
      let response = await axios.post(
        `${url}/api/v1/category`,
        {
          image: image,
          categoryName: fullName,
        },
        {
          withCredentials: true,
        },
      );
      console.log('response', response);
    } catch (error) {
      console.log('error', error);
    }
  };
  const Logout = async () => {
    try {
      let response = await axios.post(
        `${url}/api/v1/logout`,
        {},
        {withCredentials: true},
      );
      console.log('response', response);
      Dispatch(setLogin(false));
    } catch (error) {
      console.log('error', error);
    }
  };
  return (
    // <View>
    //   <Header BackButton={'step-backward'} onPress={DATEIS} />
    <ScrollView style={styles.container}>
      <AppText style={styles.heading} onPress={Move}>
        Settings
      </AppText>
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
          onChangeText={text => {
            setFullName(text);
          }}
        />
        <TouchableOpacity onPress={updateName}>
          <FontAwesome5
            style={[{color: color.grey2, fontSize: 30}]}
            name="edit"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.serpetor} />

      {/* categoty Edit */}
      <View style={styles.cameraField}>
        {systemUri == null ? (
          <CameraField
            style={styles.categoryImage}
            fontStyle={{fontSize: 40}}
            onPress={Upload}
          />
        ) : (
          <TouchableOpacity
            onPress={Upload}
            style={{height: 100, borderRadius: 10}}>
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
      </View>
      <View style={styles.categoryInputButton}>
        <SimpleInput
          style={styles.categoryInput}
          onChangeText={text => {
            setFullName(text);
          }}
        />
        <AppButton1
          style={styles.categoryButton}
          title="ADD"
          textStyle={styles.categoryButtonText}
          onPress={AddCategory}
        />
      </View>

      {/* show Category */}

      <AppText style={styles.allCategoriesText}>All Categories</AppText>
      <ScrollView style={{height: 180}} scrollEnabled={true}>
        <FlatList
          data={allCategories}
          keyExtractor={item => item._id}
          renderItem={({item}) => (
            <AllProductsComponent
              productName={item?.categoryName}
              productImage={item?.image}
            />
          )}
        />
      </ScrollView>
      <View>
        <AppButton1 title="Logout" onPress={Logout} />
      </View>
    </ScrollView>
    // </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '7%',
    flex: 1,
  },
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
