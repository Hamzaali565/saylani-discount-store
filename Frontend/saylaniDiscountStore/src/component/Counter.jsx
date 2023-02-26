import React from 'react';
import {Button, Text, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {addition, Multiplication, Subtraction} from '../store/action';

const Counter = () => {
  const data = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <View style={{alignItems: 'center'}}>
      <Button title="Add Counter" onPress={() => dispatch(addition())} />
      <Text style={{color: 'black'}}>{data}</Text>
      <Button title="Sub Counter" onPress={() => dispatch(Subtraction())} />
      <Button
        title="Multiply by 2 Counter"
        onPress={() => dispatch(Multiplication())}
      />
    </View>
  );
};

export default Counter;
