import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {useSelector} from 'react-redux';
import AllProductsComponent from '../../components/AllProductsComponent';
import AppText from '../../components/AppText';
import Header from '../../components/Header';
import color from '../../config/color';
// import CookieManager from '@react-native-cookies/cookies';

const AllProducts = ({navigation}) => {
  const [products, setProduct] = useState([]);
  const [indicator, setIndicator] = useState(true);

  const url = useSelector(state => state.url);
  useEffect(() => {
    AllProducts();
  }, []);

  const MOve = () => {
    navigation.navigate('settings');
  };
  const AllProducts = async () => {
    try {
      let response = await axios.get(`${url}/api/v1/products`, {
        withCredentials: true,
      });
      console.log('response', response.data.data);
      setProduct(response.data.data);
    } catch (error) {
      console.log('error', error);
    }
  };
  return (
    <ScrollView style={styles.container3}>
      {/* {indicator ? (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : null} */}

      <Header />
      <View style={styles.container2}>
        <View style={styles.headingContainer}>
          <AppText style={styles.heading} onPress={MOve}>
            All Products
          </AppText>
        </View>
        <View style={styles.page}>
          <FlatList
            data={products}
            keyExtractor={item => item._id}
            renderItem={({item}) => (
              <AllProductsComponent
                productImage={item.image}
                productPrice={item.unitPrice}
                productWeight={item.unitName}
                productName={item.itemName}
              />
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
  },
  container2: {
    paddingHorizontal: 10,
  },
  container3: {
    flex: 1,
  },
  heading: {
    color: color.blue,
    fontSize: 20,
    fontWeight: '600',
  },
  headingContainer: {
    marginTop: '3%',
    paddingLeft: 20,
  },
});

export default AllProducts;
