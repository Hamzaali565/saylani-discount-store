import React from 'react';
import {TextInput, View} from 'react-native';
import FontAwesome, {BrandIcons, SolidIcons} from 'react-native-fontawesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Text} from 'react-native/Libraries/Text/Text';
import color from '../config/color';

const IconInput = ({
  placeholder,
  keyboardType,
  onChangeText,
  iconStyle,
  iconName,
  secure,
  styleContainer,
}) => {
  return (
    <View style={styleContainer}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TextInput
          placeholder={placeholder}
          //   secureTextEntry={true}
          keyboardType={keyboardType}
          //   keyboardType="decimal-pad"
          onChangeText={onChangeText}
          placeholderTextColor={color.grey}
          style={{
            color: 'black',
            borderBottomColor: color.blue,
            flex: 2,
          }}
        />
        {/* <Text> */}
        <View>
          <FontAwesome5
            style={[{color: 'black', fontSize: 20}, iconStyle]}
            name={iconName}
          />
        </View>
        {/* </Text> */}
        {/* <FontAwesome icon={faMugSaucer} /> */}
      </View>
      <View style={{backgroundColor: color.grey, height: 2}} />
    </View>
  );
};
export default IconInput;
