import {
  useFocusEffect,
  useIsFocused,
  useNavigation,
} from '@react-navigation/native';
import axios from 'axios';
import React, {useCallback, useEffect, useState} from 'react';
import {View, ScrollView, Image, StyleSheet, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import AppText from '../../components/AppText';
import HeaderType from '../../components/HeaderType';
import HomeAllProductComponent from '../../components/HomeAllProductComponent';
import IconInput from '../../components/IconInput';
import MiniCard from '../../components/MiniCard';
const HomePage = () => {
  let navigation = useNavigation();
  const [data, setData] = useState([]);
  const url = useSelector(state => state.url);
  const focus = useIsFocused();
  console.log('url, ', url);

  useEffect(() => {
    // whenever you are in the current screen, it will be true vice versa
    if (focus == true) {
      // if condition required here because it will call the function even when you are not focused in the screen as well, because we passed it as a dependencies to useEffect hook
      getData();
      console.log('ok');
    }
  }, [focus]);
  const getData = async () => {
    try {
      let response = await axios.get(`${url}/api/v1/products`, {
        withCredentials: true,
      });
      console.log('response', response.data.data);
      setData(response.data.data);
    } catch (error) {
      console.log('error', error);
    }
  };
  const AddToCart = async item => {
    console.log('item', item);
    try {
      let response = await axios.post(
        `${url}/api/v1/addCart`,
        {data: item},
        {
          withCredentials: true,
        },
      );
      console.log('response', response.data);
    } catch (error) {
      console.log('error', error);
    }
  };
  // const AddToCart = async item => {
  //   try {
  //     let response = await fetch(`${url}/api/v1/addCart`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       credentials: 'include',
  //       body: JSON.stringify(item),
  //     })
  //       .then(res => {
  //         res.json();
  //       })
  //       .then(data => {
  //         console.log(data);
  //       });
  //   } catch (error) {
  //     console.log('err', error);
  //   }
  // };

  const unsubscribe = navigation.removeListener('didFocus', getData);
  return (
    <View style={styles.container}>
      <HeaderType iconName="cart-plus" subHeading="DISCOUNT STORE" count="7" />
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/Grocery.jpg')}
            style={{width: '100%'}}
          />
        </View>
        <View style={styles.inputContainer}>
          <IconInput iconName="search" placeholder="Search By Product Name" />
        </View>
        <View style={styles.SBContainer}>
          <AppText style={styles.SB}>Shop By Category</AppText>
        </View>
        <ScrollView horizontal={true}>
          <MiniCard />
          <MiniCard />
          <MiniCard />
          <MiniCard />
          <MiniCard />
        </ScrollView>
        <View>
          <FlatList
            data={data}
            keyExtractor={item => item._id}
            renderItem={({item}) => (
              <HomeAllProductComponent
                image={item?.image}
                productName={item?.itemName}
                price={item?.itemName}
                weight={item?.unitName}
                description={item?.description}
                onPress={() => {
                  AddToCart(item);
                }}
              />
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: '3%',
  },
  imageContainer: {
    marginVertical: '5%',
  },
  SB: {
    fontWeight: '700',
  },
  SBContainer: {
    marginTop: '6%',
  },
});
export default HomePage;
