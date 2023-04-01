import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import Auth from '../Routes/Auth';
const Render = () => {
  const admin = useSelector(state => state.boolean);

  return <View>{admin ? <Auth /> : null}</View>;
};

export default Render;
