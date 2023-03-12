import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import AllProductsComponent from '../../components/AllProductsComponent';
import AppText from '../../components/AppText';
import Header from '../../components/Header';
import color from '../../config/color';
const AllProducts = ({navigation}) => {
  const MOve = () => {
    navigation.navigate('addNew');
  };
  return (
    <ScrollView style={styles.container}>
      <Header />
      <View style={styles.container2}>
        <View style={styles.headingContainer}>
          <AppText style={styles.heading} onPress={MOve}>
            All Products
          </AppText>
        </View>
        <View style={styles.page}>
          <AllProductsComponent />
          <AllProductsComponent />
          <AllProductsComponent />
          <AllProductsComponent />
          <AllProductsComponent />
          <AllProductsComponent />
          <AllProductsComponent />
          <AllProductsComponent />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container2: {
    paddingHorizontal: 10,
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
