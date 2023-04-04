import React from 'react';
import {View, ScrollView, Image, StyleSheet} from 'react-native';
import AppText from '../../components/AppText';
import HeaderType from '../../components/HeaderType';
import HomeAllProductComponent from '../../components/HomeAllProductComponent';
import IconInput from '../../components/IconInput';
import MiniCard from '../../components/MiniCard';
const HomePage = () => {
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
          <HomeAllProductComponent />
          <HomeAllProductComponent />
          <HomeAllProductComponent />
          <HomeAllProductComponent />
          <HomeAllProductComponent />
          <HomeAllProductComponent />
          <HomeAllProductComponent />
          <HomeAllProductComponent />
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
