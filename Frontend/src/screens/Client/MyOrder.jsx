import React from 'react';
import {View, StyleSheet, Image, FlatList} from 'react-native';
import AppButton1 from '../../components/AppButton1';
import AppText from '../../components/AppText';
import IconInput from '../../components/IconInput';
import OrderScreenComponent from '../../components/OrderScreenComponent';
import color from '../../config/color';
const data = [
  {
    name: 'Muhammad Hamza',
    time: 'Just now',
    status: 'pending',
    phone: '0311011484',
    Total: '900',
    _id: '300',
  },
  {
    name: 'Muhammad Hamza',
    time: 'Just now',
    status: 'pending',
    phone: '0311011484',
    Total: '900',
    _id: '301',
  },
  {
    name: 'Muhammad Hamza',
    time: 'Just now',
    status: 'pending',
    phone: '0311011484',
    Total: '900',
    _id: '302',
  },
  {
    name: 'Muhammad Hamza',
    time: 'Just now',
    status: 'pending',
    phone: '0311011484',
    Total: '900',
    _id: '303',
  },
  {
    name: 'Muhammad Hamza',
    time: 'Just now',
    status: 'pending',
    phone: '0311011484',
    Total: '900',
    _id: '304',
  },
];
const MyOrder = () => {
  const Sepretor = () => {
    return <View style={styles.line} />;
  };
  return (
    <View style={styles.container}>
      {/* heading */}
      <View style={styles.headingContainer}>
        <AppText style={styles.heading}>Settings</AppText>
      </View>
      {/* Image */}
      <View style={styles.ImageContainer}>
        <Image
          source={require('../../assets/images/Ellipse.jpg')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      {/* input */}
      <View style={styles.inputContainer}>
        <IconInput
          iconName="check"
          maxLength={15}
          iconStyle={styles.icon}
          placeholder="UPDATE YOUR NAME"
          onpress={() => console.log('ok')}
        />
      </View>
      {/* order Heading */}
      <View style={styles.orderHeading}>
        <AppText style={styles.OrderText}>Orders</AppText>
      </View>
      {/* rendring cards */}
      <View style={styles.renderComp}>
        <FlatList
          ItemSeparatorComponent={<Sepretor />}
          data={data}
          keyExtractor={item => item._id}
          renderItem={({item}) => (
            <View style={styles.insideList}>
              <OrderScreenComponent
                ownerName={item.name}
                phoneNumber={item.phone}
                price={item.Total}
                orderTime={item.time}
                status={item.status}
              />
            </View>
          )}
        />
      </View>
      {/* Logout Button */}
      <View style={styles.ButtonContainer}>
        <AppButton1 title="Logout" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: '3%',
  },
  line: {
    borderWidth: 1,
    marginHorizontal: 6,
    borderColor: color.grey2,
  },
  headingContainer: {
    alignItems: 'center',
    marginTop: '5%',
  },
  heading: {
    color: color.blue,
    fontWeight: '700',
    fontSize: 25,
  },
  ImageContainer: {
    alignItems: 'center',
    marginTop: '5%',
  },
  image: {
    height: 100,
    width: 100,
  },
  icon: {
    fontSize: 30,
    color: color.green,
  },
  orderHeading: {
    marginTop: '5%',
  },
  OrderText: {
    fontSize: 25,
    fontWeight: '700',
    color: color.blue,
  },
  renderComp: {
    borderWidth: 2,
    marginTop: '5%',
    height: '35%',
    borderColor: color.green,
    borderRadius: 10,
  },
  insideList: {
    marginVertical: '3%',
  },
  ButtonContainer: {
    marginTop: '3%',
  },
});
export default MyOrder;
